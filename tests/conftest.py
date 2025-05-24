import pytest

BASE_URL = "https://www.naveenmk.me/"
# BASE_URL = "http://localhost:9000/"


@pytest.fixture(scope="session")
def base_url():
    return BASE_URL


@pytest.fixture(autouse=True)
def ensure_test_cookies(page, base_url):
    # set cookie unit_test=true
    page.goto(base_url)
    page.context.add_cookies([{"name": "unit_test", "value": "true", "url": base_url}])
    return page
