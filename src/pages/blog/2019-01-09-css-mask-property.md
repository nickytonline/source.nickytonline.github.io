---
templateKey: blog-post
title: The CSS mask property
devto_link: 'https://dev.to/nickytonline/css-mask-property-2d42'
date: 2019-01-09T16:44:39.919Z
description: An overview of how the mask CSS property works
tags:
  - css
  - ui
  - beginner
---
Say you have a background that you want a certain colour, but you only want to show parts of the background. Enter the [CSS `mask` property](https://developer.mozilla.org/en-US/docs/Web/CSS/mask "MDN documentation for the CSS mask property"). Think of it like a cookie cutter. You want to bake a cookie, not a rectangular piece of dough. So how does this fit into a real world example on the web?

Have you ever had an icon you liked and wanted to put on your site, but were like, "It would look so much better if I could integrate it with the colours in my site"? CSS `mask` property to the rescue. As you can see, if you interact with the [codepen](https://codepen.io) below, as you change the colour via the colour picker, the colour of the logo, [dev.to](https://dev.to "dev.to website") in this example, will only apply the background colour to the parts of the SVG that are filled. Shout out to [simpleicons.org](https://simpleicons.org "simpleicons.org website") for the dev.to icon!

![](/img/css-mask-property-in-actio.gif)

If you want to see it in action, take a look at the icons in the menu of my website, \[iamdeveloper.com](https://www.iamdeveloper.com "www.iamdeveloper.com web site").

Support for the CSS mask property is [pretty good](https://caniuse.com/#feat=css-masks) unless you still need to support Internet Explorer. If that's the case, a quick Google will provide you with some fallback options.

Also, there's a little bonus with this blog post. I use [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) and JavaScript to get the logo colour to change, so check that out too in the codepen.

*Note: If you're on mobile/tablet, the colour picker will not appear. You'll need to type in a valid hex colour and press ENTER on your screen keyboard for the colour to change*

Have some fun and try it out in the codepen! 👋

<iframe height="325" style="width: 100%;" scrolling="no" title="For blog post on the CSS mask property, https://dev.to/nickytonline/css-mask-property-2d42" src="//codepen.io/nickytonline/embed/preview/ebxrpv/?height=325&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nickytonline/pen/ebxrpv/'>For blog post on the CSS mask property, https://dev.to/nickytonline/css-mask-property-2d42</a> by Nick Taylor
  (<a href='https://codepen.io/nickytonline'>@nickytonline</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
