---
title: "Install Manim-Renderer on Windows"
date: 2020-09-20T17:01:41+05:30
authors: ["naveen"]
description: "How to install Manim Renderer On Windows?"
tags:
  - Renderer
  - Electron
  - Manim
---
# Installing Manim Renderer - Windows

 1. First go download the executables from [Build Artifact](https://github.com/ManimCommunity/manim-renderer/actions).
 2. Then extract that zip file using your favourite file extractor and run the exe file. This will install a program called `manim-renderer` and some shortcuts.
 3. Finally, install manim specially using the below command. Possibly a venv is recommended
	```sh
	pip install https://github.com/ManimCommunity/manim/archive/renderer-integration.zip
	```
	This will install Manim's branch which is comapatible with this renderer. You would need other system dependencies also.
 4. Then can move to [using manim-renderer](../using-manim-renderer-windows).