---
slug: "/blog/custom-application-fonts-gtk"
title: "Custom Application fonts — Gtk"
date: 2022-12-06T00:00:00+05:30
updated_date: 2022-12-06T00:00:00+05:30
draft: false
description: "The article explains how to use custom application fonts with Gtk."
image: "/assets/manim-vscode/banner.png"
---

Recently, I wanted to develop a "Cross Platform" application using Gtk for a small university project. I had to run that app on a machine which didn't have fonts configured correctly, so I looked into using a custom font that I'll ship with the app. After some Google-fu, I found that Gtk under the hood uses the Pango library to render text.

Now, the problem is how to add custom fonts into Pango's fontmap and the answer, according to the author, is to do it on the "font host" layer, see https://mces.blogspot.com/2015/05/how-to-use-custom-application-fonts.html. Pango uses different ways to find the fonts; on Windows, it uses the Windows API, so there are various ways to add a font to the "font host" layer. I've covered the majorly used "font host" layer.

I'll be referring to the "font host" layer as "backend".

## Fontconfig
Fontconfig is the default (and I guess only) backend used on Linux. The API we care about is [`FcConfigAppFontAddFile`](https://www.freedesktop.org/software/fontconfig/fontconfig-devel/fcconfigappfontaddfile.html) and [`FcConfigAppFontAddDir`](https://www.freedesktop.org/software/fontconfig/fontconfig-devel/fcconfigappfontadddir.html). The APIs wants you to pass the "path to the font file" or "path to the directory in which you have the fonts"; depending on which one you chose. For example, if I have the fonts in a directory called `fonts/` relative to my executable, I would use the following code snippet:
```c
FcConfigAppFontAddDir(NULL, "fonts/");
```
It'll return a boolean, which indicates whether the font is added successfully or not. 
Similarly, if I had a file called `fonts/custom-font.tff`, then use the following code snippet:
```c
FcConfigAppFontAddFile(NULL, "fonts/custom-font.tff");
```

## Changing backend?
Yes, it's possible to change a backend when Pango is compiled, with support for multiple backends. On Windows, Pango is usually compiled; with Fontconfig and native Windows API backend. For switching between backends, one has to set a variable name called `PANGOCAIRO_BACKEND`. The value of that variable should be the name of the backend. For example,  if `PANGOCAIRO_BACKEND=fontconfig`, then fontconfig backend is used. That's how you could fontconfig backend even on Windows, where the win32 backend is the default.