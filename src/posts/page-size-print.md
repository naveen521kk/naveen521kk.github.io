---
slug: "/blog/setting-page-size-when-printing-html"
title: "Setting page size when printing HTML"
date: 2022-12-27T10:55:01+05:30
updated_date: 2022-12-27T10:55:01+05:30
draft: false
description: "The article explains how to set the page size when using the print from html page feature in browser."
image: "/assets/page-size-print/banner.png"
tags: ["html","css","print","media-query"]
---

Recently, in a project I was working on, I was given the task to setup a page which the user
will print with only frontend-tools (html, javascript and css). The project was all setup on
frontend side and doesn't have a server, that's why all this had to be done on the frontend.

### About `@page` css rule

Now, what I found was that there exists a [`@page` css rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@page) which can be used to set the page size
when printing a page. The rule is as follows:

```css
@page {
    size: A4;
}
```

The above rule will set the page size to that of a A4 sheet when printing the page. See https://developer.mozilla.org/en-US/docs/Web/CSS/@page/size
for the possible values.

### Setting page orientation

It's also possible to set the page to landscape when printing by using the `landscape` keyword.

```css
@page {
    size: A4 landscape;
}
```

That will set the page size to A4 and the orientation to landscape, something which you would need when printing a large table.

### Using a media query - `print`

Another thing is that you can use the `@page` rule to set the page size for a specific media query. For example, if you want to set the page size to A4 for the print media query, you can do the following:

```css
@media print {
    @page {
        size: A4;
    }
}
```

That media query is really useful when you just want to set the page size when printing and not when the page is rendered on the screen.

### Conditionally loading a stylesheet

If you want to load a different stylesheet when printing, you can use the media query to load the stylesheet.

```html
<link rel="stylesheet" href="style.css" media="screen" />
<link rel="stylesheet" href="print.css" media="print" />
```

### Setting page margins

If you want page margins to be set, you can use the `margin` property of the `@page` rule.

```css
@page {
    size: A4;
    margin: 1cm;
}
```

### Setting page header and footer

You can use the `@page` rule to set the page header and footer.

```css
@page {
    size: A4;
    margin: 1cm;
    @bottom-left {
        content: "This is the footer";
    }
}
```

### More information

More detailed explanation about various way to print a page can be found at https://developer.mozilla.org/en-US/docs/Web/Guide/Printing.

This is a very simple article, but I think it will be helpful for someone who wants to print a page from the browser. If you have any questions, feel free to ask in the comments or create a new issue at https://github.com/naveen521kk/naveen521kk.github.io/issues.
