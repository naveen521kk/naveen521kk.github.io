---
title: "Using Manim-Renderer on Windows"
date: 2020-09-20T17:01:41
authors: ["naveen"]
description: "How to use Manim Renderer On Windows?"
tags:
  - Renderer
  - Electron
  - Manim
---
# Using Manim Render in Windows
 After [installing Manim-Render](../install-windows) using previous steps follow the steps below to use it.
 1. First, open the app `manim-renderer` from start menu.
 2. Then go to the place where manim script is located and open a cmd/powershell window there. 
 3. Then activate the venv, if any, and run the command below to view the video in the renderer.
	```powershell
	manim <fileName> <SceneNane> --use_js_renderer --js_renderer_path="$env:LOCALAPPDATA\manim-renderer\manim-renderer.exe"
	```
 4. Press the play button in the open renderer window to see the animation.
 5. Finally, you can press and drag your mouse on screen to rotate camera. See below on how it looks on running a example scene.

![manim-renderer](https://i.imgur.com/YymQz1F.gif)

