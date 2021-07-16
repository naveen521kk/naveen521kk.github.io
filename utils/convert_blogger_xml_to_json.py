import json
import re
import xml.etree.ElementTree as ET
from pathlib import Path

export_file = Path(__file__).parent / "blogger-blog-backup.xml"
tree = ET.parse(export_file)
root = tree.getroot()
final_contents = []
i = 0
for element in root.findall("{http://www.w3.org/2005/Atom}entry"):
    tmp_content = {}
    for sub_element in element:
        if sub_element.tag == "{http://www.w3.org/2005/Atom}id":
            if re.match(".*settings.*", sub_element.text):
                tmp_content = {}
                break

        if sub_element.tag == "{http://www.w3.org/2005/Atom}content":
            tmp_content["content"] = sub_element.text
        if sub_element.tag == "{http://search.yahoo.com/mrss/}thumbnail":
            tmp_content["image"] = sub_element.get("url")
        if sub_element.tag == "{http://www.w3.org/2005/Atom}title":
            tmp_content["title"] = sub_element.text
        if sub_element.tag == "{http://www.w3.org/2005/Atom}published":
            tmp_content["published"] = sub_element.text
        if sub_element.tag == "{http://www.w3.org/2005/Atom}updated":
            tmp_content["updated"] = sub_element.text
        if sub_element.tag == "{http://www.w3.org/2005/Atom}link":
            if (
                sub_element.get("type") == "text/html"
                and sub_element.get("rel") == "alternate"
            ):
                slug: str = sub_element.get("href")
                slug = slug.replace(".html", "")
                slug = slug.replace("https://", "")
                slug = slug.replace("http://", "")
                slug = "/".join(slug.split("/")[1:])
                tmp_content["slug"] = "/" + slug
    i = i + 1
    if [
        "content",
        "image",
        "published",
        "slug",
        "title",
        "updated",
    ] == sorted(list(tmp_content.keys())):

        final_contents.append(tmp_content)
    else:
        pass

with open("blogposts.json", "w") as f:
    json.dump(final_contents, f)  # there should be 32 posts.
