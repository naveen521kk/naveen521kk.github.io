---
title: "Using Img2pdf CLI"
date: 2020-09-16T16:59:01+05:30
draft: false
authors: ["naveen"]
description: "Lightweight CLI to convert Images to PDF"
tags:
  - img2pdf
  - python
---


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