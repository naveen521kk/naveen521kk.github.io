# Copyright Naveen M K, 2021

import cairo
import colour

# outer_color = [0.3, 0.4, 0.9, 1.0]  # orig 0.4, 0.2, 0.4
outer_color = list(colour.hex2rgb("#5FA172")) + [1]
inner_color = list(colour.hex2rgb("#2F3954")) + [1]
width, height = 500, 500
with cairo.SVGSurface("logo.svg", width, height) as surface:
    context = cairo.Context(surface)
    context.scale(width, height)
    context.set_line_width(0.01)

    context.move_to(0, 0)
    context.curve_to(0, 0, 0.5, 1, 1, 0)
    context.set_source_rgba(*inner_color)
    context.stroke()

    context.move_to(0, 1)
    context.curve_to(0, 1, 0.5, 0, 1, 1)
    context.set_source_rgba(*inner_color)
    context.stroke()

    context.move_to(0, 0)
    context.curve_to(0, 0, 1, 0.5, 0, 1)
    context.set_source_rgba(*inner_color)
    context.stroke()

    context.move_to(1, 0)
    context.curve_to(1, 0, 0, 0.5, 1, 1)
    context.set_source_rgba(*inner_color)
    context.stroke()

    context.move_to(0, 0)
    context.line_to(1, 1)
    context.set_source_rgba(*outer_color)
    context.stroke()

    context.move_to(1, 0)
    context.line_to(0, 1)
    context.set_source_rgba(*outer_color)
    context.stroke()

    context.move_to(0, 0)
    context.curve_to(0, 0, 0.5, 0.5, 0, 1)
    context.set_source_rgba(*outer_color)
    context.stroke()

    context.move_to(1, 1)
    context.curve_to(1, 1, 0.5, 0.5, 1, 0)
    context.set_source_rgba(*outer_color)
    context.stroke()

    context.move_to(0, 0)
    context.curve_to(0, 0, 0.5, 0.5, 1, 0)
    context.set_source_rgba(*outer_color)
    context.stroke()

    context.move_to(0, 1)
    context.curve_to(0, 1, 0.5, 0.5, 1, 1)
    context.set_source_rgba(*outer_color)
    context.stroke()

    surface.write_to_png("logo.png")
