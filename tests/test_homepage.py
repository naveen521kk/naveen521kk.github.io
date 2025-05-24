import pytest
import re
from playwright.sync_api import Page, expect


@pytest.fixture(autouse=True)
def ensure_homepage(page, base_url):
    page.goto(base_url)
    expect(page).to_have_url(base_url)
    return page


def test_homepage_title(page):
    expect(page).to_have_title("Naveen M K | About Me")


@pytest.mark.parametrize(
    "selector, text",
    [
        ("a[href='mailto:naveen521kk@gmail.com']", "Email"),
        ("a[href='https://github.com/naveen521kk']", "Github"),
        ("a[href='https://twitter.com/naveen521kk']", "Twitter"),
        ("a[href='https://gitlab.com/naveen521kk']", "Gitlab"),
        ("a[href='https://fosstodon.org/@naveen521kk']", "Mastodon"),
        ("a[href='https://threads.net/@naveen521kk']", "Threads"),
    ],
)
def test_social_links_visible(page, selector, text):
    link = page.locator(selector)
    expect(link).to_be_visible()
    # title
    expect(link).to_have_attribute("title", text)


def test_freelance_banner_and_cookie(page):
    # freelance-ad
    banner = page.locator("#freelance-ad")
    expect(banner).to_be_visible()
    close = banner.get_by_title("Close")
    close.click()
    expect(banner).not_to_be_visible()
    cookies = page.context.cookies()
    assert any(c["name"] == "hideFreelanceAd" for c in cookies)


def test_google_analytics_and_ads_present(page):
    html = page.content()
    assert "G-695MYTZSVL" in html, "GA ID missing"
    assert "ca-pub-7183740147103241" in html, "Ads ID missing"


def test_links_to_blog_and_project(page):
    blog_posts_link = page.locator("a[href='/posts/']").nth(0)
    expect(blog_posts_link).to_be_visible()
    expect(blog_posts_link).to_have_text("Blog")
    expect(page.locator("a[href='https://projects.naveenmk.me/']")).to_be_visible()


def test_theme_toggle_presence_and_persistence(page):
    toggle = page.locator("#theme-toggler")
    expect(toggle).to_be_visible()
    # toggle to dark
    toggle.click()
    html_loc = page.locator("html")
    expect(html_loc).to_contain_class("dark")
    page.reload()
    expect(html_loc).to_contain_class("dark")
    # toggle back to light
    page.locator("#theme-toggler").click()
    # dark mode should be removed
    expect(html_loc).not_to_contain_class("dark")


def test_header_logo(page):
    logo = page.get_by_test_id("navbar-logo")
    expect(logo).to_be_visible()
    expect(logo.locator("a")).to_have_attribute("href", "/")
    expect(logo).to_have_text("Naveen M K")


def test_meta_description(page):
    meta = page.locator("meta[name='description']")
    expect(meta).to_have_count(1)
    expect(meta.first).to_have_attribute("content", re.compile(".*Naveen M K.*"))
