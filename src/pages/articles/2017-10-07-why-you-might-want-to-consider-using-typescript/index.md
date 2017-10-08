---
title: "Why You Might Want to Consider Using TypeScript"
date: "2017-10-07T10:00:00Z"
layout: post
draft: false
path: "/why-you-might-want-to-consider-using-typescript/"
category: "programming"
description: "A small write up on the benefits of using TypeScript."
tags:
  - "typescript"
---

I'm not going to be one of those that tells you have to use TypeScript (or Flow for that matter). I'm also not going to go into the whole [TS vs. Flow](https://www.google.ca/search?q=flow+vs.+typescript&rlz=1C5CHFA_enCA763CA763&oq=flow+vs.+typescript&aqs=chrome.0.0l4.3590j0j4&sourceid=chrome&ie=UTF-8) debate. There are plenty of people already doing that. All I want to do is present some good reasons why you might want to consider using TypeScript. After that, I leave it up to you.

I've been using TypeScript since fall 2014 (v. 1.3). It's come a long way. The amount of care that has gone into the language to keep it as a superset of JavaScript (not altering the JS language) is amazing. Kudos to [Anders Hejlsberg, the entire TypeScript team and OSS peeps](https://github.com/Microsoft/TypeScript/graphs/contributors) that have made this such a great project.

Why TypeScript?
---------------

So let's get to it. If you've never used a statically typed language like Java or C#, this may seem foreign to you. You're probably asking yourself, why TypeScript?

* Type Safety: During development, if a type is not correct, it is caught during compile time. e.g. `const index: number = 'hi'; // index can't be a string` or if a property on an object has a typo. This allows us to catch errors early on during development instead of at run-time (since JS is a dynamically typed language). Here's a good explanation of [statically typed vs. dynamic languages](https://stackoverflow.com/a/1517670/77814).
* Refactoring and Intellisense capabilities when using a TypeScript enabled editor or plugin.
  * [Visual Studio Code](https://code.visualstudio.com), my preferred editor. Here's my setup, [vscode.iamdeveloper.com](http://vscode.iamdeveloper.com).
  * [TypeScript Atom Plugin](https://atom.io/packages/atom-typescript)
  * [TypeScript Sublime Text Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin)
  * [WebStorm](https://www.jetbrains.com/help/webstorm/typescript.html)
  * [IntelliJ Ultimate](https://www.jetbrains.com/help/idea/typescript.html)
  * [TypeScript for Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48593)
  * Visual Studio 2017 (includes TypeScript support)
  * [alm.tools](http://alm.tools)
  * Did I miss one?
* Intellisense when using npm packages that have TypeScript type definitions even if your project isn't written in TypeScript (As far as I know this only applies to VS Code. Please chime in if this is not the case.)

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">If you&#39;re not using <a href="https://twitter.com/typescriptlang?ref_src=twsrc%5Etfw">@typescriptlang</a>, you can still benefit from it in <a href="https://twitter.com/code?ref_src=twsrc%5Etfw">@code</a>. Packages u import that have typings provide typed intellisense. <a href="https://t.co/hA81wrdMO0">pic.twitter.com/hA81wrdMO0</a></p>&mdash; VS Code Tips (@vscodetips) <a href="https://twitter.com/vscodetips/status/910937405267509249?ref_src=twsrc%5Etfw">September 21, 2017</a></blockquote>

Great, looks awesome, but what about consuming npm packages from projects that don't use TypeScript? As mentioned briefly above, Visual Studio Code can grab the declaration files even if your project doesn't use TypeScript. So where are these declaration files coming from?

TypeScript Declaration Files
----------------------------

What is a TypeScript declaration file? In a nutshell, it's a file that describes what types are in a package. For authors of TypeScript based projects, they will almost always [author TypeScript declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html). For projects that aren't written in TypeScript, sometimes, package authors will write the declaration files by hand and maintain them in their projects. In most cases though, the community has stepped in/up to write declaration files by hand of projects that aren't written in TypeScript. They're all housed in a repository called [DefinitelyTyped](http://definitelytyped.org), a repository of high quality TypeScript type definitions maintained by the JS/TS OSS community.

To add types for a package that does not have its own declaration file, install its equivalent `@types` package. e.g. `npm install lodash --save;npm install @types/lodash --save-dev;` Now when you use lodash in your TS project in a TS capable editor, you will get typed Intellisense.

Who's Using It?
---------------

The hard (smart) work and love that has gone into TypeScript has not gone unnoticed. In recent times, some fairly large projects that you may know have migrated to TypeScript.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">1/ It seems like a lot of big companies lately are migrating to a type system for big projects. <a href="https://twitter.com/github?ref_src=twsrc%5Etfw">@github</a>, <a href="https://t.co/WbXrUbR1Xj">https://t.co/WbXrUbR1Xj</a>,</p>&mdash; Nick Taylor (@nickytonline) <a href="https://twitter.com/nickytonline/status/913242699255488512?ref_src=twsrc%5Etfw">September 28, 2017</a></blockquote>

* Fun fact, [Visual Studio Code](https://github.com/Microsoft/vscode) is written in TypeScript!
* Angular adopted TypeScript in version 2 (related [Dart, Typescript and official languages at Google](news.dartlang.org/2017/04/dart-typescript-and-official-languages.html))
* [TypeScript at Slack – Several People Are Coding](https://slack.engineering/typescript-at-slack-a81307fa288d)
* [GitHub Rewrites its Desktop Client Using Electron](https://www.infoq.com/news/2017/05/github-electron-desktop-client)
* [Apollo GraphQL](https://github.com/apollographql)
* [MobX](https://github.com/mobxjs/mobx)
* [TypeScript at Lyft](https://eng.lyft.com/typescript-at-lyft-64f0702346ea)
* [RxJS](https://github.com/ReactiveX/rxjs)
* [glimmer.js](https://github.com/glimmerjs/glimmer.js) (of Ember fame), also related [Glimmer.js: What’s the Deal with TypeScript?](https://medium.com/@tomdale/glimmer-js-whats-the-deal-with-typescript-f666d1a3aad0)

I'm sure there are others, but these are the big ones I'm aware of. You can always check GitHub for [trending TypeScript projects](https://github.com/trending/typescript).

Additional Resources
--------------------

Here are some additional resources to get you up and running.

* [TypeScript Playground](https://www.typescriptlang.org/play)
* [TypeScript Deep Dive](https://www.gitbook.com/book/basarat/typescript)
* [Full-stack TypeScript](https://fullstacktypescript.slack.com) on Slack
* Accounts to follow on Twitter:
  * The Offical TypeScript account ([@typescriptlang](https://twitter.com/typescriptlang))
  * Daniel Rosenwasser ([@drosenwasser](https://twitter.com/drosenwasser))
  * Mohamed Hegazy ([@fdsmars](https://twitter.com/fdsmars))
  * Marius Schulz ([@mariusschulz](https://twitter.com/mariusschulz))
  * Basarat Ali Syed ([@basarat](https://twitter.com/basarat))
  * If I missed one that you think should be on this list, let me know (nick at iamdeveloper dot com).

To summarize, TypeScript is a great option if you're looking to scale a team up quickly on a codebase (Intellisense, refactoring) as well as catching silly errors via type checking. In a later post I'll go into how to migrate an existing codebase to TypeScript. If you're interested in seeing what a project looks like after being converted to TypeScript, check out  [ts-react-slingshot](https://github.com/typescriptcrew/ts-react-slingshot).

Thanks goes out to [@drosenwasser](https://twitter.com/drosenwasser), [@RichSeviora](https://twitter.com/RichSeviora) and [@nojvek](https://twitter.com/nojvek) for taking the time to review this blog post. 💯 🔥

Questions or comments? Hit me up on Twitter [@nickytonline](https://www.twitter.com/nickytonline).

P.S. [Happy 5th birthday TypeScript](https://twitter.com/typescriptlang/status/914918151556448256)!