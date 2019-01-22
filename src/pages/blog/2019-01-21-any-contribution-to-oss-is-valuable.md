---
templateKey: blog-post
title: Any contribution to Open Source is valuable
date: 2019-01-22T03:24:42.256Z
description: Brief overview of every contribution to OSS being valuable.
tags:
  - oss
  - gatsbyjs
  - react
  - career
---
We hear people say it all the time, but I would like to reiterate it. Any contribution you make to open source is a valuable contribution. Sure we all like adding features or fixing bugs in a project, but updating documentation is still worthwhile. I was reminded of this on the weekend.

My site is currently using [Gatsby](https://gatsbyjs.org), an awesome React based static site generator on steroids.

https://twitter.com/amber1ey/status/1042796116255879168

For tweets on my blog posts, I had installed the [gatsby-plugin-twitter](https://www.gatsbyjs.org/packages/gatsby-plugin-twitter/) about a year ago. It was working well for me, but then I came across this tweet.

https://twitter.com/raae/status/1086362206005006336

I checked out the npm package, [@raae/gatsby-remark-oembed](https://www.npmjs.com/package/@raae/gatsby-remark-oembed) and then followed the links to the repository and demo. It looked pretty awesome and fast and it supported much more than Twitter. I installed the package, copied the code snippet to add to my gatsby-config.js and was all good to go.

I fired up my development environment and I was getting errors about the plugin not being found.

```
Error: Unable to find plugin "gatsby-remark-oembed". Perhaps you need to install its package?
```

I was a little perplexed, read over things several times in the documentation and then came to the realization, that since the author published the package, the name of the npm package was not the same name, it was a [scoped package](https://docs.npmjs.com/misc/scope), i.e. `@raee/gatsby-remark-oembed` instead of `gatsby-remark-oembed` (like in the code snippet in the documentation). I was glad I figured out what was up. I got the plugin running locally and then I published my site and was good to go. I was also happy to have migrated it to TypeScript, but we'll save that for another post.

https://twitter.com/nickytonline/status/1087096096176959488

At this point, I was like, well if I spent 15-20 minutes trying to figure out what was up, I'm sure others would appreciate what I had discovered, so I put up a PR to update the documentation. It got merged and I felt just as good about adding these 6 characters, `@raae/` to the code snippet in the documentation as I do when I fix a bug or add new functionality to a project.

**Every contribution to open source is valuable.**

https://twitter.com/raae/status/1087419926204305408

Thanks for the thanks [@raae](https://twitter.com/raae)!

