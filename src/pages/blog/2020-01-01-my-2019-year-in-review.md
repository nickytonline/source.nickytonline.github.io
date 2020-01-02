---
templateKey: blog-post
title: My 2019 Year in Review
devto_link: 'https://dev.to/nickytonline/my-2019-year-in-review-23i1'
date: 2020-01-01T12:05:30.273Z
description: A recap of my 2019
tags:
    - yearinreview
---

## The Intro

2019 was great. Lot’s of interesting stuff happened. Let’s dig in. But first, I say to you 2019... good day.

![NSYNC "Bye, bye bye!"](https://media.giphy.com/media/hFXwY4lER3oBO/giphy.gif)

## Open-Source

I enjoyed another great year in open source and also contributed to some new projects. I'll go through the most notable ones, not because the others are not important, it's just that these were the ones that sprung to mind while writing my review of 2019.

### Project: @raee/gatsby-remark-oembed

My site which is pretty much just a blog at the moment uses Gatsby. One interesting plugin I came across was from [@raee](https://dev.to/raae) called gatsby-remark-oembed. It allows you to embed resources as widgets that support oembed, e.g. Twitter.

I got it all installed but ran into issues. In the end, the documentation for setting up the plugin needed to be updated. I [put up a PR](https://github.com/raae/gatsby-remark-oembed/pull/35) to update the documentation, so others wouldn't stumble on the issue I ran into. And of course I wrote about it. Check out my post [Any contribution to Open Source is valuable](/blog/2019-01-21-any-contribution-to-oss-is-valuable/).

### Project: Gatsby

This was a big contribution LOL. I added my site to the list of showcased sites. As a thank you for my first PR, I got myself some Gatsby socks. I also wrote a short post on [showcasing your Gatsby site](/blog/2019-02-28-showcase-your-gatsby-site/).

### Project: Refined GitHub

For this project, I helped migrate the Refined GitHub extension to TypeScript. This was a huge endeavour that spanned several months. I am currently not using TypeScript at work, so this was one of my outlets to flex some TypeScript muscle. I wrote about this as a [big win for me in April on DEV](https://dev.to/nickytonline/comment/a85d).

https://twitter.com/sindresorhus/status/1093893754992320513

### Project: TypeScript

This was a contribution to the TypeScript repository, but in the form of filing an issue. While working on the Refined GitHub extension refactor to TypeScript, I discovered an [issue with the NamedNodeMap interface](https://github.com/Microsoft/TypeScript/issues/30928) in the core types that ships with TypeScript. The issue got labelled as a bug so it is in their backlog now.

### Project: dev.to codebase

I [continued to contribute](https://github.com/thepracticaldev/dev.to/commits?author=nickytonline) to my favourite open source project, DEV.

### Hacktoberfest

This year was my first year participating in Hacktoberfest. It was a fun endeavour which included contributions to DEV as well as adding some automation for properly formatting markdown files for the learnstorybook.com project. You can read about it in my post, [My Hacktoberfest 2019](/blog/2019-10-14-my-hacktoberfest-2019/).

https://www.instagram.com/p/B5WKOqIJZCX/

### Open Source in 2020

I will definitely continue to contribute to open source in 2020. What about you?

## Getting Back in Shape

I’ve been athletic pretty much since elementary school, but in recent years, I’ve had a few setbacks with injuries. Last fall, I joined the corporate soccer team and a few practices in, I ended up tearing one of my calves. While I was recovering from my injury, I ended up putting on quite a few pounds, so end of April this year, I hit the tipping point and began my journey to getting back in shape.

https://www.instagram.com/p/B0ClFBSJ4Hu/

Initially, it was quite tough, because even though I had completed my physiotherapy for my torn calf, I was nowhere near being in any kind of running shape. I ended up joining an Orange Theory and the rest was history. I busted my butt and got back into pretty awesome shape, dropping literally 35-40lbs of fat.

https://www.instagram.com/p/B1xaOVvp820/

I put a couple back on as it’s the Christmas holidays, but will be getting back into the swing of things post-holidays.

## Automating Deployments for My Site

I don’t know about you, but updating dependencies for your site is a pain because if you need to build with the new dependencies and make sure everything still works fine. Or even code changes for new stuff. For my blog, it is not a mission-critical site, but I took my Cypress knowledge, a dash of Dependabot and Netlify to put it all together. Let the robots do the heavy lifting.

I have probably already saved a good 50 hours this year not updating and testing dependency updates and will probably save myself hundreds of hours, maybe the low thousands of hours next year.

And yes, I wrote a post about it. Check out my post [Update Dependencies with Dependabot, Cypress and Netlify](https://www.iamdeveloper.com/blog/2019-08-15-update-dependencies-with-dependabot-cypress-and-netlify/).

## Page Load Time Improvements for Shotgun

I improved the page load times of the product I work on, [Shotgun](https://shotgunsoftware.com), with some webpack and frontend build changes I made. One of our high profile clients, [Lucasfilm Ltd. was very happy](https://dev.to/nickytonline/comment/ip05) about the improvements. It felt really good when our support team posted in Slack that Lucasfilm noticed a 20% speed improvement based on their own internal testing. 🔥

## Interviewing at Facebook

One day, I received a message on LinkedIn and noticed that it was a message from a recruiter from Facebook. Even though I was quite happy with my current job, it seemed silly not to entertain the thought of potentially working at Facebook and the fact that they contacted me made me feel pretty good.

I passed the initial phone screen and then prepped for my first interview that would be with a frontend engineer from one of the teams at Facebook. I spent a lot of time preparing, and ended up doing really well. To be honest, I didn’t think I would make it past the first interview. I just always assumed the big companies were never achievable. A side effect of having imposter syndrome even after years of experience. 🙃

I moved on to the second interview, and once again did well. I got the phone call from Facebook that they wanted to move to the final step, an interview in Menlo Park. They flew me down for the weekend and then I was to interview on Monday. I had never been to California, so I was very excited to go.

![Facebook badge](/img/fb_badge.png)

One of my cousins lives in California, so I also took the opportunity to visit some family. Aside from that or, I contacted [Brian Vaughn](https://twitter.com/brian_d_vaughn), one of the core React team members just to see if he wanted to grab a bite to eat/coffee with a random Canadian. I’ll be honest, I generally do not ask strangers to meet up, but he seemed like such a nice person on Twitter and GitHub, that I just went for it. We grabbed some sushi and a coffee on Sunday and just chit-chatted. It was really nice of him to do that while I was there.

https://www.instagram.com/p/B3Aii_CpCP0/

Thanks Brian and I am definitely hooked on Philz coffee now! Philz Coffee… please come to Canada, specifically Montreal. 😆

https://www.instagram.com/p/B3AjS5kpdh5/

On Monday, I had an intense day of interviewing at Facebook, but there was a lunch break. At lunchtime, none other than [Andrew Clark](https://twitter.com/acdlite) from the React core team joined me for lunch. It was awesome. We spent an hour together at lunch talking about all kinds of things including React. Thanks for lunch Andrew! Andrew is super nice BTW.

It gets better. After lunch, Andrew took me to grab a coffee on the Facebook campus. He mentioned that [Sebastian Markbage](https://twitter.com/sebmarkbage), another React core team member, instituted a mandatory coffee break a couple of times during the day based on a Swedish tradition called [Fika](https://hejsweden.com/en/have-coffee-breaks-called-fika-swedish/). So we grabbed our coffees and I got to sit with the React team that is based in California. It was only about 15 minutes, but it was just another amazing unexpected thing to come out of interviewing with Facebook. Honestly, the entire team was super nice. I don't know if this is the norm when a frontend interviews at Facebook, but I am definitely not complaining.

I finished my day at Facebook exhausted and headed back on a redeye to Montreal. Regardless of what the final outcome was of the interview process with Facebook, it was an amazing experience for me. In the end, things did not work out, but had I never accepted that initial phone call with the recruiter from Facebook, I never would have met any of the React team or visited my cousin. Remember folks, take chances!

And yes, I have a post about that, [Take Chances and Stand Out](https://www.iamdeveloper.com/blog/2019-01-05-take-chances-and-standout/)

## Building a Course

This is a work in progress, but I started work on a TypeScript course. It's not finished yet and I have never written a course or any type of education material, but I am very excited to get it completed. Special shoutout to [Ali Spittel](https://twitter.com/ASpittel) for providing me with some great coaching for writing this course.

I will definitely let you all know when it's available.

## VS Code Tips

I created the [@vscodetips](https://twitter.com/vscodetips) Twitter account back in September 2017 and it looks like this year, it’s gained a lot of traction. It gained ~2000 users in 2019. By no means a huge amount of followers in the Twittersphere at almost 3500 users, but I’m still pretty happy about that. People seemed to enjoy the tips I post or things I retweet related to VS Code. If you’re one of VS Code Tips followers, thanks!

https://twitter.com/vscodetips/status/1212631550321451008

VS Code tips is [also on DEV](https://dev.to/vscodetips), but I have not done much there yet.

## New Beginnings Starting in 2020

As the year came to a close, I decided to accept an unbelievably amazing opportunity. I am very excited about it! It is a fully remote position working with a dope team. I cannot wait to get started. I will share more about this in early 2020.

Thanks for reading and Happy New Year!
