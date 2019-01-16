---
templateKey: blog-post
title: The CSS mask property
date: 2019-01-09T16:44:39.919Z
description: An overview of how the mask CSS property works
tags:
  - css
  - ui
  - beginner
---
Say you have a background that you want a certain colour, but you only want to show parts of the background. Enter the [CSS `mask` property](https://developer.mozilla.org/en-US/docs/Web/CSS/mask "MDN documentation for the CSS mask property"). Think of it like a cookie cutter. You want to bake a cookie, not a rectangular piece of dough. So how does this fit into a real world example on the web?

Have you ever had an icon you liked and wanted to put on your site, but were like, "It would look so much better if I could integrate it with the colours in my site"? CSS `mask` property to the rescue. As you can see if you interact with the [codepen](https://codepen.io) below, as you change the colour via the colour picker, the colour of the logo, [dev.to](https://dev.to "dev.to website") in this example, will only apply the background colour to the parts of the SVG that are filled.

![](/img/css-mask-property-in-actio.gif)

Have some fun and try it yourself! 👋

<iframe height='265' scrolling='no' title='codepen for blog post on the CSS mask property' src='//codepen.io/nickytonline/embed/ebxrpv/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/nickytonline/pen/ebxrpv/'>codepen for blog post on the CSS mask property</a> by Nick Taylor (<a href='https://codepen.io/nickytonline'>@nickytonline</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
