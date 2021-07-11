---
slug: "/blog/how-did-i-create-my-logo"
title: "How I created my Logo?"
date: 2021-07-11T00:56:01+05:30
draft: false
description: "I created my Logo using Bezier curves with the help of PyCairo."
image: "/images/banner.png"
---

I created a *new logo* today, it was some Python and other things I learned while developing Manim.

### My Original Logo

Initially, I was using a **rocket** gif (or rather a static one) as a logo for my online profiles.

<video autoplay loop muted playsinline>  
  <source src="/assets/logo-post/videos/rocket.webm" type="video/webm">  
  <source src="/assets/logo-post/videos/rocket.mp4" type="video/mp4">  
</video>

This logo was great; I loved it (was in my profile for ~6 months), but it was time for a change I was searching for a new one or trying to create one today.


### The Story

First, I opened [Inkscape](https://inkscape.org/) and had no plans about the logo, so it's an unplanned art. I am no artist and new to Inkscape UI; I was going to each of the tools available there. Something which interested me was **Pen Tools**, which would be able to draw [Beizer Curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve). I was playing with that and then that gave me an idea 💡.

I decided that my logo is going to contain some [Quadratic Beizer Curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Quadratic_B%C3%A9zier_curves) with the starting point as `(0, 0)`; second control point `(0.5, 1)`; and the endpoint as `(1, 0)`. Similarly, there would be a curve around all the other sides. I tried to do that Inkscape and I didn't get any success 😢. 

Annoyed with Inkscape, I thought it would be better to create things programmatically. I wanted some tool that could give me an SVG and an API that is easy to understand. I have previously used [PyCairo(Python Bindings for Cairo Graphics Library)](https://pycairo.readthedocs.io) for [Manim](https://manim.community) and understand its API a bit; I decided to use it. 

I started to write a script that will create the SVG. So, I started with creating a [`cairo.Surface`](https://pycairo.readthedocs.io/en/latest/reference/surfaces.html) and a [`cairo.Context`](https://pycairo.readthedocs.io/en/latest/reference/context.html) from that. I decided to get a 500x500 SVG file.

```py
import cairo

width, height = 500, 500
with cairo.SVGSurface("logo.svg", width, height) as surface:
    context = cairo.Context(surface)
    context.scale(width, height)
    context.set_line_width(0.01)
```

I have scaled the `context` so I can use units within `(0,1)` rather than absolute size. Also, I have set the line width to `0.01` (a random value from *trial and error*).

Now, to draw a Bezier curve as I previously mentioned, I had to use [`Context.curve_to`](https://pycairo.readthedocs.io/en/latest/reference/context.html#cairo.Context.curve_to) method.

```py
context.curve_to(0, 0, 0.5, 1, 1, 0) # (0, 0), (0.5, 1), (1, 0)
```

Then I set the colour I wanted, for now, I just choose Black(`#000000`).
```py
context.set_source_rgba(0, 0, 0, 1)
```
and then finally use [`Context.stroke`](https://pycairo.readthedocs.io/en/latest/reference/context.html#cairo.Context.stroke) to draw the curve onto the surface.
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

![beizer curve cairo](/assets/logo-post/beizer-curve.svg)


Next, it's about drawing a similar Beizer Curve from the other sides of the Image. So, I started by drawing a curve `(0, 1)`, `(0.5, 0)`, `(1, 1)`, which when translated to Python would be

```py
    context.move_to(0, 1)
    context.curve_to(0, 1, 0.5, 0, 1, 1)
    context.set_source_rgba(0, 0, 0, 1)
    context.stroke()
```

![two beizer curve cairo](/assets/logo-post/beizer-curve-1.svg)

And then another two curve `(0, 0)`, `(1, 0.5)`, `(0, 1)`.

```py
    context.move_to(0, 0)
    context.curve_to(0, 0, 1, 0.5, 0, 1)
    context.set_source_rgba(0, 0, 0, 1)
    context.stroke()
```

![three beizer curve cairo](/assets/logo-post/beizer-curve-2.svg)

and another one `(1, 0)`, `(0, 0.5)`, `(1, 1)`.

```py
    context.move_to(1, 0)
    context.curve_to(1, 0, 0, 0.5, 1, 1)
    context.set_source_rgba(0, 0, 0, 1)
    context.stroke()
```

![four beizer curve cairo](/assets/logo-post/beizer-curve-3.svg)

The logo is getting its shape. Now, I draw two lines from each corner using [`Context.line_to()`](https://pycairo.readthedocs.io/en/latest/reference/context.html#cairo.Context.line_to). But this time with a different colour RGBA `.5, .3, 6, 1` (Just a random one 😉).

```py
    context.move_to(0, 0)
    context.line_to(1, 1)
    context.set_source_rgba(.5, .3, 6)
    context.stroke()

    context.move_to(1, 0)
    context.line_to(0, 1)
    context.set_source_rgba(.5, .3, 6, 1)
    context.stroke()
```

![four beizer curve two line cairo](/assets/logo-post/beizer-curve-line.svg)

Now, the logo has come in a good shape, and I want more Beizer curves so, I decided to draw another four. These curves had the same colour as that of the line and are exactly half of the previously drawn one.

First, I draw a curve with the coordinates `(0, 0,)`, `(0.5, 0.5)`, `(0, 1)`.

```py
    context.move_to(0, 0)
    context.curve_to(0, 0, 0.5, 0.5, 0, 1)
    context.set_source_rgba(.5, .3, 6, 1)
    context.stroke()
```

![five beizer curve two line cairo](/assets/logo-post/beizer-curve-line-1.svg)

Then one with `(1, 1)`, `(0.5, 0.5)`, `(1, 0)`

```py
    context.move_to(1, 1)
    context.curve_to(1, 1, 0.5, 0.5, 1, 0)
    context.set_source_rgba(.5, .3, 6, 1)
    context.stroke()
```

![six beizer curve two line cairo](/assets/logo-post/beizer-curve-line-2.svg)

Next with `(0, 0)`, `(0.5, 0.5)`, `(1, 0)`

```py
    context.move_to(0, 0)
    context.curve_to(0, 0, 0.5, 0.5, 1, 0)
    context.set_source_rgba(.5, .3, 6, 1)
    context.stroke()
```

![seven beizer curves two line cairo](/assets/logo-post/beizer-curve-line-3.svg)

and, finally another one `(0, 1)`, `(0.5, 0.5)`, `(1, 1)` 🎉.

```py
    context.move_to(0, 1)
    context.curve_to(0, 1, 0.5, 0.5, 1, 1)
    context.set_source_rgba(.5, .3, 6, 1)
    context.stroke()
```

![eight beizer curves two line cairo](/assets/logo-post/beizer-curve-line-4.svg)

This got the base of my Logo. Now it's time to pick the colours. I wanted the first four curves to have a separate colour 🦄.

So, I went to http://colormind.io/ (a *random* website which I got from a Google Search). Selected the colour` #5FA172` as the colour for outer Beizer Curves and the Line and `#2F3954` as the colour for the inner Curves. I spend at least half an hour selecting them 🤦‍♂️.


Finally, I edited the script which I got so that I can change the colours by just changing two variables `outer_color` and `inner_color`.

And, here is the final result.

![Naveen naveen521kk logo](/assets/logo-post/final-logo.svg)

You could have seen that already I had been using it around in this site and the final script is over [here](https://github.com/naveen521kk/naveen521kk.github.io/blob/3a5e5abde14ba95c65ebd13d38f9ffe06ae57d76/logo/logo.py).

### Creating Favicon

After creating the new logo, I wanted to change the favicon of this site. I didn't want to upload it anywhere and I want to programmatically generate those Favicons. Doing a random search got me to this [article](https://nedbatchelder.com/blog/202012/favicons_with_imagemagick.html) and use [librsvg](https://wiki.gnome.org/Projects/LibRsvg/) for converting a `.svg` which I generated previously to `.png`. So, I install both [librsvg](https://packages.msys2.org/package/mingw-w64-x86_64-librsvg?repo=mingw64)  (`rsvg-convert.exe`) and [imagemagick](https://packages.msys2.org/package/mingw-w64-x86_64-imagemagick?repo=mingw64) from [MSYS2](https://msys2.org).

What I did first was to create 6 png file with various size from the SVG using `rsvg-convert` tool. Each png was of different size.
```shell
cp logo.svg temp-logo.svg
rsvg-convert temp-logo.svg  -w 16 -h 16 --output temp-16.png
rsvg-convert temp-logo.svg -w 32 -h 32 --output temp-32.png
rsvg-convert temp-logo.svg -w 48 -h 48 --output temp-48.png
rsvg-convert temp-logo.svg -w 64 -h 64 --output temp-64.png
rsvg-convert temp-logo.svg -w 96  -h 96 --output temp-96.png
rsvg-convert temp-logo.svg -w 256 -h 256 --output temp-256.png
```

And then, used ImageMagick to convert them to favicon.
```shell
convert temp-16.png temp-32.png temp-48.png temp-64.png temp-96.png temp-256.png +dither -colors 255 "favicon.ico"
```

Finally, I deleted the previous generated `temp-*` files.

```shell
rm temp-*.png temp-*.svg
```

You can get the whole shell script from [here](https://github.com/naveen521kk/naveen521kk.github.io/blob/main/logo/build-favicon.sh). I ran it under MSYS2 on my Windows machine.

### Aftermath

Then I opened Inkscape to get a white background on that logo. I could use Cairo but well...

Finally, uploaded my new logo to Discord, Github and Gravatar. Though this didn't fit perfectly in a circle I could edit them slightly to make things work. 

If you’ve read and followed the post this far, THANK YOU! 😃
