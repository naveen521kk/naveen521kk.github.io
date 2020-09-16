---
title: "Install Manim-Tex on Windows"
date: 2020-09-15T12:01:41+05:30
authors: ["naveen"]
description: "Installing LaTeX for Manim On Windows. Lightweight."
tags:
  - LaTex
  - Manim
---
# Installing LaTeX For Manim On Windows

1. First, download `ManimTex.windows-latest.zip` from the [Release Section](https://github.com/naveen521kk/manim-tex/releases).

2. Extract the `zip` file using [WinRAR](https://www.rarlab.com/download.htm) or [7z](https://www.7-zip.org/) or even Windows Explorer.

3. Next, open you Command Prompt(Windows + R + cmd) and `cd` into the location where you extracted the `zip` file.

> The location should be the folder which contain's the `bin` folder.

4. Run the following command to add the executable's to Path so that Manim Detect it.
```cmd
bin\win32\tlmgr.bat path add
```
5. After that you can proceed with other installation steps [here](https://manimce.readthedocs.io/en/latest/installation/win.html) and finally run the example scene below.
```py
from manim import *
class Test(Scene):
  def construct(self):
    self.play(Write(TexMobject(r"Hello \alpha")))
    self.play(Write(TexMobject(r"\mathbb{Manim is Great}")))
```
6. If it works properly, you have done your LaTeX installation.
