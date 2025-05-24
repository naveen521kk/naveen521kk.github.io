import re
import requests
import pytest
from xml.etree import ElementTree as ET

def test_sitemap_index_exists(base_url):
    url = f"{base_url}/sitemap-index.xml"
    resp = requests.get(url)
    assert resp.status_code == 200


def test_homepage_references_sitemap_index(page, base_url):
    page.goto(base_url)
    html = page.content()
    # there should be a `<link rel="sitemap" type="application/xml" href="/sitemap-index.xml"/>`
    # ie a rel="sitemap" link in the head
    assert re.search(r'<link\s+rel="sitemap"\s+type="application/xml"\s+href="/sitemap-index.xml"', html)
    
def test_sitemap_index_references_sitemap(page, base_url):
    page.goto(f"{base_url}/sitemap-index.xml")
    xml = page.content()
    # there should be a `<sitemap>` tag with a `<loc>` child
    assert re.search(r"<sitemap>\s*<loc>https://www.naveenmk.me/sitemap-0.xml</loc>\s*</sitemap>", xml)

# check if rss.xml exists and valid
def test_rss_exists_and_valid(base_url):
    url = f"{base_url}/rss.xml"
    resp = requests.get(url)
    assert resp.status_code == 200
    # Check if the response is well-formed XML
    try:
        ET.fromstring(resp.content)
    except ET.ParseError:
        pytest.fail("rss.xml is not well-formed XML")

def test_robots_txt_references_sitemap_index(page, base_url):
    page.goto(f"{base_url}/robots.txt")
    text = page.content()
    assert re.search(r"(?i)Sitemap:", text)
    assert "sitemap-index.xml" in text


def test_ads_txt_contains_publisher_id(base_url):
    url = f"{base_url}/ads.txt"
    resp = requests.get(url)
    assert resp.status_code == 200
    assert "pub-7183740147103241" in resp.text


def test_naveen521kk_gpg(base_url):
    url = f"{base_url}/naveen521kk.gpg"
    resp = requests.get(url)
    assert resp.status_code == 200
    # Check if string "-----BEGIN PGP PUBLIC KEY BLOCK-----" is in the response
    assert "-----BEGIN PGP PUBLIC KEY BLOCK-----" in resp.text
