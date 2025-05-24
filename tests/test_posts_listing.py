import pytest
from playwright.sync_api import expect


@pytest.fixture(autouse=True)
def open_posts_page(page, base_url):
    response = page.goto(f"{base_url}/posts")
    assert response.status == 200
    return page


def test_posts_page_title(page):
    expect(page).to_have_title("Blog Posts | Naveen M K")


def test_posts_page_has_article_links(page):
    links = page.get_by_test_id("posts-links").locator("a")
    assert links.count() > 0, "No post links found on /posts"


def test_each_post_link_returns_200(page, base_url):
    links = page.get_by_test_id("posts-links").locator("a")
    for i in range(links.count()):
        href = links.nth(i).get_attribute("href")
        # Resolve relative URLs
        url = href if href.startswith("http") else f"{base_url}{href.lstrip('/')}"
        resp = page.request.get(url)
        assert resp.status == 200, f"Link {url} returned {resp.status}"
