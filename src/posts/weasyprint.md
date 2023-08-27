---
slug: "/blog/weasyprint"
title: "Tips and Tricks for Using Weasyprint to Generate PDFs"
date: 2023-08-27T00:00:00+05:30
draft: false
description: "Things I learned while using Weasyprint to generate PDFs from HTML and CSS."
image: "/assets/weasyprint/banner.png"
tags: ["weasyprint","pdf","html","css"]
---

Weasyprint if you’ve not known before is a wonderful tool to generate PDFs from HTML and CSS. It’s a Python library and it’s very easy to use.

In this post, I'm writing about the things I learned when I was using Weasyprint on a project. Hope that this will help someone!

## Setting page size

Using the `@page` property of CSS one can set the page size. The default page size is A4. But if you want to change it, you can do it like this:

```css
@page {
    size: A3 landscape;
}
```

See the [MDN docs for @page rules's size property](https://developer.mozilla.org/en-US/docs/Web/CSS/@page/size) for more information about the values that can be used.

## Setting page margins

Similar to setting page size, you can set the page margins using the `@page` property.

```css
@page {
    margin: 1cm;
}
```

## Page breaks

You can set page breaks using the `page-break-before` and `page-break-after` properties. I usually define a class called `.page-break` and use it like this:

```html
<style>
    .page-break {
        page-break-after: always;
    }
</style>
<div class="page-break"></div>
```

You can use the `page-break-before` and `page-break-after` properties directly on the element you want to break the page before or after.

If you've some content that you want to keep together, you can use the `page-break-inside` property.

```css
.page-break-inside {
    page-break-inside: avoid;
}
```

See the [MDN docs for page-break-inside](https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside) for more information.

## Displaying page numbers

I was generating a report and I wanted to display the page numbers on the bottom of the page. I used the `content` property of CSS to do this.

```css
@page {
    @bottom-center {
        content: counter(page);
    }
}
```

The `counter` function is used to display the page number. The `page` is a counter that is incremented for each page. You can also use the `counter` function to display the total number of pages.

```css
@page {
    @bottom-center {
        content: counter(page) " of " counter(pages);
    }
}
```

See the [MDN docs for counter function](https://developer.mozilla.org/en-US/docs/Web/CSS/counter) for more information.

## Displaying headers and footers

While you can use the `@page` property to display headers/footer which contains text displaying something like a logo (an SVG Image) was tricky. I was asked to display the logo of my university at the top of each page. Here's some code that I used to do this.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        header {
            position: running(header);
            /* height of the header */
            height: 4cm;
        }

        @page {
            size: A4;
            /* Add margin for the header */
            margin-top: 4cm;

            @top-center {
                content: element(header);
            }
        }

        .page-break {
            page-break-after: always;
        }
    </style>
</head>
<body>
    <header>
        <!-- set the height to match the header height -->
        <img src="header.svg" style="height: 4cm" />
    </header>
    <h1>Page 1</h1>
    <div class="page-break"></div>
    <h1>Page 2</h1>
</body>
</html>
```
You could add anything you would like to display in the header inside the `header` element. Similarly, you can change the `@top-center` to `@bottom-center` to display the footer.

## Displaying long tables

If you've a long table that spans multiple pages, you can use the `table-header` and `table-footer` properties to display the table header and footer on each page.

```css
thead {
    display: table-header-group;
}
tfoot {
    display: table-footer-group;
}
```

## Disabling word wrapping

If you've a long word that you don't want to wrap, you can use the `white-space` property to do this.

```css
.long-word {
    white-space: nowrap;
}
```

For me, I had a table with a column that contained a long word. I used the `white-space` property to disable word wrapping for that column, YMMV.

## That's all

That's all for now. I'll update this post if I learn something new. If you've any questions, feel free to ask me on [twitter](https://twitter.com/naveen521kk) or open a new [discussion](https://github.com/naveen521kk/naveen521kk.github.io/discussions).
