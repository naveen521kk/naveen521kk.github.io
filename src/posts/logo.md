---
slug: "/blog/how-did-i-create-my-logo"
title: "How I created my Logo?"
date: 2021-07-11T00:56:01+05:30
draft: false
description: "I created my Logo using beizer curves and PyCairo."
image: "/images/banner.png"
---

I created a *new logo* today, it was some Python and other things I learned while developing Manim.

### My Original Logo

Initially, I was using a **rocket** gif (or rather a static one) as a logo for my online profiles.

![rocket_naveen521kk_logo](https://user-images.githubusercontent.com/49693820/125174588-0d7cae00-e1e4-11eb-92e5-edec322b914f.gif)

This was nice and I loved it(was in my profile for ~6 months), but it was time for a change I was searching for a new one or trying to create one today.


### The story

First, I opened [Inkscape](https://inkscape.org/) and had no plans about the logo, so it's an unplanned art. I am no artist and new to Inkscape UI; I was going to each of the tools avaiable there. Something which intersted me was **Pen Tools**, which would be able to draw [Beizer Curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve). I was playing with that and then that gave me an idea 💡.

I decided that my logo is going to contain a [Quadratic Beizer Curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Quadratic_B%C3%A9zier_curves) with the starting point as `(0, 0)`; second control point `(0.5, 1)`; and the end point as `(1, 0)`. Similaryly there would be a curve around all the other sides. I tried to do that Inkscape and I didn't get any sucess 😢. 

Annoyed with Inkscape, I though it would be better to create things programmically. I wanted some tool which could give me an SVG and a API which is easy to understand. I have previously used [PyCairo(Python Bindings for Cairo Graphics Library)](https://pycairo.readthedocs.io) for [Manim](https://manim.community) and understand it's API a bit; I decided to use it. 

I started to write a script which will create me the SVG. So, I started with creating a [`cairo.Surface`](https://pycairo.readthedocs.io/en/latest/reference/surfaces.html) and a [`cairo.Context`](https://pycairo.readthedocs.io/en/latest/reference/context.html) from that. I decided to get a 500x500 SVG file.

```py
import cairo

width, height = 500, 500
with cairo.SVGSurface("logo.svg", width, height) as surface:
    context = cairo.Context(surface)
    context.scale(width, height)
    context.set_line_width(0.01)
```

I have scaled the `context` so I can use units within `(0,1)` rather than absolute size. Also, I have set the line width to `0.01` (a random value from *trial and error*).

Now, to draw a beizer curve as I previously mentioned, I had to use [`Context.curve_to`](https://pycairo.readthedocs.io/en/latest/reference/context.html#cairo.Context.curve_to) method.

```py
context.curve_to(0, 0, 0.5, 1, 1, 0) # (0, 0), (0.5, 1), (1, 0)
```

Then I set the color I wanted, for now I just choose Black(`#000000`).
```py
context.set_source_rgba(0, 0, 0, 1)
```
and then finally use [`Context.stroke`](https://pycairo.readthedocs.io/en/latest/reference/context.html#cairo.Context.stroke) to draw the curve on to surface.
```py
context.stroke()
```

This whole code now becomes
```py
import cairo

width, height = 500, 500
with cairo.SVGSurface("logo.svg", width, height) as surface:
    context = cairo.Context(surface)
    context.scale(width, height)
    context.set_line_width(0.01)
    context.curve_to(0, 0, 0.5, 1, 1, 0) # (0, 0), (0.5, 1), (1, 0)
    context.set_source_rgba(0, 0, 0, 1)
    context.stroke()
```
which gave me an SVG like

![beizer curve cairo](/images/logo-post/beizer-curve.svg)

TBD.

