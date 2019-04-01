---
templateKey: blog-post
title: An a11y extension coming to a browser near you
date: 2019-04-01T01:02:21.470Z
description: PR I'm working on to get tota11y deployed as a browser extension.
tags:
  - a11y
  - javascript
  - browser-extension
---
Last year when I was looking to take on a new role somewhere, one of the places I interviewed at was Khan Academy. TLDR, I wasn’t hired 😉. However, as a candidate, I wanted to stand out (relevant post [Take chances and standout](https://www.iamdeveloper.com/blog/2019-01-05-take-chances-and-standout/)). In a nutshell, I [put up a PR](https://github.com/Khan/tota11y/pull/131) to Khan’s [tota11y](https://github.com/Khan/tota11y) repository to convert their a11y tool to a browser extension.

The goal of the PR was, aside from standing out, was to make it an extension without interfering with how their tool works when loaded as a [bookmarklet](https://khan.github.io/tota11y/#Try-it).

I’ll be up front, I’m not an a11y expert, so this tool was actually really good for me to learn a few things. Here’s a shot of it in action.

https://twitter.com/nickytonline/status/1040818193911173120

One of the coolest features is the screen reader wand (Khan's work, not mine).

![t0ta11y screen reader wand in action](/img/tota11y-in-action.gif "t0ta11y screen reader wand in action")

The PR isn’t merged yet, but will hopefully be in the next month or so. Regardless, you can try it out today as an unpacked extension in Chrome, FireFox, Brave or any browser that lets you load Chrome Webstore extensions. Just see the [README](https://github.com/nickytonline/tota11y/tree/poc/tota11y-as-chrome-extension#loading-tota11y-as-an-unpacked-chrome-extension) for instructions for loading it as an unpacked extension.

I hope you find it useful and shoutout to the devs at Khan for making this great tool.
