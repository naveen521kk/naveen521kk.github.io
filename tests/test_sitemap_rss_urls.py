import requests
import pytest
import xml.etree.ElementTree as ET

def _get_namespace(tag):
    if tag.startswith("{"):
        return tag[1:].split("}")[0]
    return ""

@pytest.fixture(scope="module")
def sitemap_index_xml(base_url):
    url = f"{base_url}/sitemap-index.xml"
    resp = requests.get(url)
    assert resp.status_code == 200, "sitemap-index.xml not found"
    return resp.text

@pytest.fixture(scope="module")
def sitemap_urls(sitemap_index_xml):
    root = ET.fromstring(sitemap_index_xml)
    ns = _get_namespace(root.tag)
    sitemap_locs = root.findall(f".//{{{ns}}}loc") if ns else root.findall(".//loc")
    urls = []
    for sm in sitemap_locs:
        sm_url = sm.text.strip()
        resp = requests.get(sm_url)
        assert resp.status_code == 200, f"{sm_url} not reachable"
        sub_root = ET.fromstring(resp.text)
        sub_ns = _get_namespace(sub_root.tag)
        locs = sub_root.findall(f".//{{{sub_ns}}}loc") if sub_ns else sub_root.findall(".//loc")
        urls += [loc.text.strip() for loc in locs]
    return urls

def test_sitemap_index_well_formed(sitemap_index_xml):
    ET.fromstring(sitemap_index_xml)

def test_sitemap_references_child_sitemaps(sitemap_index_xml):
    assert "sitemap-0.xml" in sitemap_index_xml

def test_sitemap_urls_reachable(sitemap_urls):
    for href in sitemap_urls:
        resp = requests.get(href)
        assert resp.status_code == 200, f"{href} returned {resp.status_code}"

@pytest.fixture(scope="module")
def rss_xml(base_url):
    url = f"{base_url}/rss.xml"
    resp = requests.get(url)
    assert resp.status_code == 200, "rss.xml not found"
    return resp.text

def test_rss_well_formed(rss_xml):
    ET.fromstring(rss_xml)

def test_rss_items_reachable(rss_xml):
    root = ET.fromstring(rss_xml)
    ns = _get_namespace(root.tag)
    items = root.findall(f".//{{{ns}}}item") if ns else root.findall(".//item")
    assert items, "No <item> entries in RSS feed"
    for item in items:
        link_elem = item.find(f"{{{ns}}}link") if ns else item.find("link")
        assert link_elem is not None and link_elem.text, "Item missing <link>"
        href = link_elem.text.strip()
        resp = requests.get(href)
        assert resp.status_code == 200, f"{href} returned {resp.status_code}"
