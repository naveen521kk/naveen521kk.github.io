import pytest

BASE_URL = "https://www.naveenmk.me/"
# BASE_URL = "http://localhost:9000/"

@pytest.fixture(scope="session")
def base_url():
    return BASE_URL
