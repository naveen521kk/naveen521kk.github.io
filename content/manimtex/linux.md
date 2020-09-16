---
title: "Install Manim-Tex on Linux"
date: 2020-09-15T12:06:41+05:30
authors: ["naveen"]
description: "Installing LaTeX for Manim On Linux. Lightweight."
tags:
  - LaTex
  - Manim
---
# Installing LaTeX For Manim On Windows

1. First, download `ManimTex-Linux.tar.gz` from the [Release Section](https://github.com/naveen521kk/manim-tex/releases).

2. Extract the `tar.gz` file using [7z](https://www.7-zip.org/) or File Manager or using `tar` command.
```sh
tar -xzvf ManimTex-Linux.tar.gz
```

3. Next, open you Terminal(Alt+Ctrl+T) and `cd` into the location where you extracted the file.

> The location should be the folder which contain's the `bin` folder.

4. Run the following command to add the executable's to Path so that Manim Detect it.
```sh
bin/*/tlmgr path add
```

5.  Finally, add `$HOME/bin` to your Path Variable. See [this article](https://www.howtogeek.com/658904/how-to-add-a-directory-to-your-path-in-linux/) for that.

6. After that you can proceed with other installation steps [here](https://manimce.readthedocs.io/en/latest/installation/win.html) and finally run the example scene below.
```py
from manim import *
class Test(Scene):
  def construct(self):
    self.play(Write(TexMobject(r"Hello \alpha")))
    self.play(Write(TexMobject(r"\mathbb{Manim is Great}")))
```
7. If it works properly, you have done your LaTeX installation.