#!/bin/bash
# need imagemagick and librsvg


cp logo.svg temp-logo.svg 
rsvg-convert temp-logo.svg  -w 16 -h 16 --output temp-16.png
rsvg-convert temp-logo.svg -w 32 -h 32 --output temp-32.png
rsvg-convert temp-logo.svg -w 48 -h 48 --output temp-48.png
rsvg-convert temp-logo.svg -w 64 -h 64 --output temp-64.png
rsvg-convert temp-logo.svg -w 96  -h 96 --output temp-96.png
rsvg-convert temp-logo.svg -w 256 -h 256 --output temp-256.png
convert temp-16.png temp-32.png temp-48.png temp-64.png temp-96.png temp-256.png +dither -colors 255 "favicon.ico"
rm temp-*.png temp-*.svg
