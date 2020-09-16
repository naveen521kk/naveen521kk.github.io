---
title: "Installing Img2pdf CLI"
date: 2020-09-16T16:59:01+05:30
draft: false
authors: ["naveen"]
description: "Lightweight CLI to convert Images to PDF"
tags:
  - img2pdf
  - python
---

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

