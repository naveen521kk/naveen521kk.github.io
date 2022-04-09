---
slug: "/docs/img2pdf/"
title: "What is Img2pdf?"
date: 2020-09-16T16:59:01+05:30
draft: false
description: "Lightweight CLI to convert Images to PDF"
image: "https://opengraph.githubassets.com/02f9096fdad1f84156cd9fb74d2aed493f0aaab74f50dc5dd2d62a60bf804ae4/naveen521kk/img2pdf"
---

Img2Pdf is an *CLI* for converting images in a folder into a PDF file.
This has a capability of adding borders around the image and finally converts it to PDF files using PIL.

Made with ❤ By Naveen

# Installing Img2Pdf CLI

## Installing Using Pip

Img2pdf can be installed using [`pip` ](https://pypi.org/project/imgtopdfeasy/). For that you would need Python installed adding it to Path and also see `pip` installed. See [PyPi documentation](https://pip.pypa.io/en/stable/installing/) on how to do that.

After you have, installed it. Open you teminal/Command Prompt and type the following command.

```sh
pip install imgtopdfeasy
```


## Installing From Source

You would need [`git`](https://git-scm.com) for installing that. First,clone the repository.

```sh
git clone https://github.com/naveen521kk/img2pdf.git
cd img2pdf
```

Then you would need [poetry](https://python-poetry.org) for doing editable installs. Then install using

```sh
poetry install
```

Activate your poetry venv and the start working. ;-)

# Using Img2Pdf

Img2Pdf can be simply used by below syntax

```sh
img2pdf -i <Path-to-folder> -o <Path-to-output-file> -ext <extension-of-image-to-add>
```

The following options are available.

```sh
usage: img2pdf [-h] -i INPUT -o OUTPUT -ext EXTENSION [--border]
               [--border_size BORDER_SIZE] [--border_color BORDER_COLOR]

Converts Images To Pdf

optional arguments:
  -h, --help            show this help message and exit
  -i INPUT, --input INPUT
                        Input file folder full path. Realtive or abosolute
  -o OUTPUT, --output OUTPUT
                        Output file name,No pdf required
  -ext EXTENSION, --extension EXTENSION
                        File extension of image to add.
  --border              Add border to Images
  --border_size BORDER_SIZE
                        Size of border of Images
  --border_color BORDER_COLOR
                        Colour of Border of Images

Made with ❤ By Naveen
```