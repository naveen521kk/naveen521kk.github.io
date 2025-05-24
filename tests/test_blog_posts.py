# python
import os
import glob
import yaml
import pytest
from playwright.sync_api import Page, expect
from pathlib import Path
import pytz
import re
import json

POSTS_DIR = Path(__file__).parent.parent / "src" / "posts"


# 1. Helpers
def parse_frontmatter(path):
    text = open(path, encoding="utf-8").read()
    parts = text.split("---")
    if len(parts) < 3:
        return {}
    return yaml.safe_load(parts[1])


# 2. Collect all posts
POSTS = []
for ext in ("md", "mdx"):
    for path in glob.glob(os.path.join(POSTS_DIR, f"*.{ext}")):
        name = os.path.splitext(os.path.basename(path))[0]
        front = parse_frontmatter(path)
        slug = front.get("slug", name)
        POSTS.append((name, slug, front))

# 3. Sort by date
POSTS.sort(key=lambda x: x[2].get("date", ""), reverse=True)

@pytest.mark.parametrize("name, slug, front", POSTS)
def test_blog_post_page_status(page: Page, base_url, name, slug, front):
    if front.get("draft", False):
        pytest.skip("Draft post, skipping test")
    url = f"{base_url}/{slug}"
    response = page.goto(url)
    assert response.status == 200

@pytest.mark.parametrize("name, slug, front", POSTS)
def test_blog_post_title_and_header(page: Page, base_url, name, slug, front):
    if front.get("draft", False):
        pytest.skip("Draft post, skipping test")
    url = f"{base_url}/{slug}"
    page.goto(url)
    expect(page).to_have_title(front["title"])
    expect(page.get_by_test_id("blog-title")).to_have_text(front["title"])

@pytest.mark.parametrize("name, slug, front", POSTS)
def test_blog_post_dates(page: Page, base_url, name, slug, front):
    if front.get("draft", False):
        pytest.skip("Draft post, skipping test")
    url = f"{base_url}/{slug}"
    page.goto(url)
    date_utc = front["date"].astimezone(pytz.UTC)
    expect(page.get_by_test_id("blog-date")).to_have_text(
        re.compile(f"Published on {date_utc.strftime('%B %d, %Y')}.*"), ignore_case=True
    )
    if "updated_date" in front:
        updated_date_utc = front["updated_date"].astimezone(pytz.UTC)
        expect(page.get_by_test_id("blog-date")).to_have_text(
            re.compile(f".*Updated on {updated_date_utc.strftime('%B %d, %Y')}"),
            ignore_case=True,
        )

@pytest.mark.parametrize("name, slug, front", POSTS)
def test_blog_post_tags(page: Page, base_url, name, slug, front):
    if front.get("draft", False):
        pytest.skip("Draft post, skipping test")
    url = f"{base_url}/{slug}"
    page.goto(url)
    tag_links = page.get_by_test_id("blog-tags").locator("a")
    assert tag_links.count() > 0, "No tags found"
    texts = [tag_links.nth(i).text_content().strip() for i in range(tag_links.count())]
    for tag in front.get("tags", []):
        assert tag in texts, f"Tag '{tag}' missing on {url}"

@pytest.mark.parametrize("name, slug, front", POSTS)
def test_blog_post_meta(page: Page, base_url, name, slug, front):
    if front.get("draft", False):
        pytest.skip("Draft post, skipping test")
    url = f"{base_url}/{slug}"
    page.goto(url)
    meta_title = page.locator('meta[property="og:title"]')
    meta_description = page.locator('meta[property="og:description"]')
    image = page.locator('meta[property="og:image"]')
    assert meta_title.count() > 0, "Meta title not found"
    assert meta_description.count() > 0, "Meta description not found"
    assert image.count() > 0, "Meta image not found"
    assert meta_title.nth(0).get_attribute("content") == front["title"]
    assert meta_description.nth(0).get_attribute("content") == front["description"]
    assert front["image"] in image.nth(0).get_attribute("content")

@pytest.mark.parametrize("name, slug, front", POSTS)
def test_blog_post_headings_have_ids(page: Page, base_url, name, slug, front):
    if front.get("draft", False):
        pytest.skip("Draft post, skipping test")
    url = f"{base_url}/{slug}"
    page.goto(url)
    headings = page.locator("#blog-start").locator("h1, h2, h3, h4, h5, h6")
    assert headings.count() > 0, "No subheadings found"
    for i in range(headings.count()):
        hid = headings.nth(i).get_attribute("id")
        assert hid and hid.strip(), f"Heading #{i} missing id on {url}"

@pytest.mark.parametrize("name, slug, front", POSTS)
def test_blog_post_extras(page: Page, base_url, name, slug, front):
    if front.get("draft", False):
        pytest.skip("Draft post, skipping test")
    url = f"{base_url}/{slug}"
    page.goto(url)
    expect(page.get_by_test_id("blog-header-image")).to_be_visible()
    expect(page.locator("#comments")).to_be_visible()
    expect(page.locator("#toc")).to_be_visible()
    ad_count = page.locator(".adsbygoogle").count()
    assert ad_count >= 2, f"Only {ad_count} ad containers on {url}"


# test json+ld schema for all pages
@pytest.mark.parametrize("name, slug, front", POSTS)
def test_blog_post_json_ld(page: Page, base_url, name, slug, front):
    if front.get("draft", False):
        pytest.skip("Draft post, skipping test")

    url = f"{base_url}/{slug}"
    response = page.goto(url)
    assert response.status == 200

    # Check for JSON-LD schema
    json_ld = page.locator('script[type="application/ld+json"]')
    assert json_ld.count() > 0, "No JSON-LD schema found"
    json_ld_content = json_ld.nth(0).text_content()
    assert json_ld_content, "JSON-LD schema is empty"
    # Validate JSON-LD schema
    try:
        json_ld_data = json.loads(json_ld_content)
    except json.JSONDecodeError:
        pytest.fail("JSON-LD schema is not valid JSON")

    assert json_ld_data.get("@context") == "https://schema.org", "Invalid @context in JSON-LD"
    assert json_ld_data.get("@type") == "BlogPosting", "Invalid @type in JSON-LD"
    assert json_ld_data.get("headline") == front["title"], "Invalid headline in JSON-LD"
    assert json_ld_data.get("author", {}).get("@type") == "Person", "Invalid author type in JSON-LD"
    assert json_ld_data.get("author", {}).get("name") == "Naveen M K", "Invalid author name in JSON-LD"
    assert json_ld_data.get("author", {}).get("url") == "http://www.naveenmk.me", "Invalid author URL in JSON-LD"
    assert json_ld_data.get("author", {}).get("image") == "https://avatars.githubusercontent.com/u/49693820", "Invalid author image in JSON-LD"
    assert json_ld_data.get("name") == front["title"], "Invalid name in JSON-LD"
    assert json_ld_data.get("abstract") == front["description"], "Invalid abstract in JSON-LD"
    assert json_ld_data.get("image") == front["image"], "Invalid image in JSON-LD"
    assert json_ld_data.get("description") == front["description"], "Invalid description in JSON-LD"
    assert json_ld_data.get("copyrightHolder") == "Naveen M K", "Invalid copyright holder in JSON-LD"
