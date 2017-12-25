---
title: "My Visual Studio Code Setup"
date: "2017-12-20T05:00:00Z"
layout: post
draft: false
path: "/my-visual-studio-code-setup/"
category: "Programming"
description: "A small write up on my Visual Studio Code setup"
tags:
  - "Visual Studio Code"
  - "Developer Tools"
---

This originally was [just a gist](https://gist.github.com/nickytonline/3d5ffeab871a6662d7a3f89bb0bed0f8), but I thought it made sense to just convert it to a blog post.

As the [stateofjs.com](https://stateofjs.com) survey this year noted, Visual Studio Code is quickly becoming the [editor of choice](https://stateofjs.com/2017/other-tools/) for many web developers.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Perhaps the most striking stat on the 2017 State of <a href="https://twitter.com/hashtag/JavaScript?src=hash&amp;ref_src=twsrc%5Etfw">#JavaScript</a> Survey: VS Code (<a href="https://twitter.com/code?ref_src=twsrc%5Etfw">@code</a>) is by far the most popular editor - and it&#39;s only 2.5 years old!<br><br>❤️ the new Microsoft.<a href="https://t.co/BwfJBHln4y">https://t.co/BwfJBHln4y</a> <a href="https://t.co/pd1GWQJB7X">pic.twitter.com/pd1GWQJB7X</a></p>&mdash; Cory House 🏠 (@housecor) <a href="https://twitter.com/housecor/status/940799686826430464?ref_src=twsrc%5Etfw">December 13, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[VS Code](https://code.visualstudio.com/Download) is my editor of choice. It's great for web dev, and if you're developing with [TypeScript](http://www.typescriptlang.org), it's definitely the way to go. Fun fact... it's written in TypeScript. If you're interested in learning more about TypeScript, check out my blog post [Why You Might Want to Consider Using TypeScript](why-you-might-want-to-consider-using-typescript).

TypeScript is what gives VS Code its refactoring and intellisense capabilities. Here's the really cool part. You get typed intellisense even if you're not using TypeScript via [Automatic Type Acquisition](https://code.visualstudio.com/docs/languages/javascript#_automatic-type-acquisition).

Alright, let's get to it. Here's my current [Visual Studio Code](https://code.visualstudio.com) setup.

## Extensions

VS Code has a huge array of extensions available on their [marketplace](https://marketplace.visualstudio.com/vscode). As well as extensions, in 2017, [extension packs](https://code.visualstudio.com/docs/extensionAPI/extension-manifest#_extension-packs) became available. tl;dr, they're a grouping of extensions.

[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) is a must have extension and I recommend installing it as your first extension. With this extension, you'll be able to backup most of your settings to a private gist. From there, restoring your settings is pretty easy. It's great for backing up settings as well as synching settings, which is what I do between my work and personal laptop.

### Node/JS

* [Node extension pack](https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack) (must have)
* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

### Formatting/Linting

* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [Prettify JSON](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json)
* [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### CSS

* [IntelliSense for CSS class names](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
* [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
* [Color Picker](https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color)
* [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
* [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

### Debugging

Language extensions like Go and Python (see below) when installed get all the proper tooling set up to debug for those specific languages. Here's some others. The easiest way to get started with debugging is to press `F5` and VS Code will offer you debugging configurations to get set up with.

* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

### Git

* [Git extension pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.git-extension-pack) (must have)
* [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)
* [gitflow](https://marketplace.visualstudio.com/items?itemName=vector-of-bool.gitflow)
* [Open in GitHub / Bitbucket / Gitlab / VisualStudio.com !](https://marketplace.visualstudio.com/items?itemName=ziyasal.vscode-open-in-github)

### Unit Testing

* [JavaScript Unit Test snippets](https://marketplace.visualstudio.com/items?itemName=iZDT.javascript-unit-test-snippet)
* [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

### React

* [React Redux ES6 Snippets](https://marketplace.visualstudio.com/items?itemName=timothymclane.react-redux-es6-snippets)
* [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
* [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

### Other Languages

* [Go](https://marketplace.visualstudio.com/items?itemName=lukehoban.Go)
* [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

### REPLs/Playgrounds

* [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode) (check out [Introducing Quokka...](https://medium.com/@artem.govorov/introducing-quokka-the-live-scratchpad-for-javascript-free-developer-tool-a0eb15bb4f54))

### Viewers

* [Image Preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
* [SVG Viewer](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer)
* [View in Browser](https://marketplace.visualstudio.com/items?itemName=qinjia.view-in-browser)

### DevOpsy Stuff

* [Jenkinsfile Support](https://marketplace.visualstudio.com/items?itemName=secanis.jenkinsfile-support)
* [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)

### Hack the Editor

* [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides)
* [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) (currently used for the [Cobalt 2 theme](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2).)

### Miscellaneous

* [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
* [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
* [Gatsby Snippets](https://marketplace.visualstudio.com/items?itemName=nickytonline.vscode-gatsby-snippets)

## Themes

* [Cobalt 2](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)
* [Dracula theme](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
* [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
* [Material theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)

### Current Theme Setup

I'm currently taking the [Cobalt 2](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2) theme for a spin with the Fish Shell Fisherman Agnoster theme.

![Cobalt 2 Theme with Fisherman Agnoster Theme](https://gist.githubusercontent.com/nickytonline/3d5ffeab871a6662d7a3f89bb0bed0f8/raw/c00e3c60587414e788f62f89a503bc5a9b220bd0/cobalt2_agnoster_theme.jpg)

I still love using the [Dracula theme](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula) with the Fish Shell Fisherman Joker theme, but thought I'd switch it up for a bit.

![Dracula Theme with Fisherman Joker Theme](https://gist.githubusercontent.com/nickytonline/3d5ffeab871a6662d7a3f89bb0bed0f8/raw/c00e3c60587414e788f62f89a503bc5a9b220bd0/dracula_joker_theme.jpg)

I've also used [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme), and [Material theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme) which are great as well.

## Shell

I use [Fish Shell](https://fishshell.com) and [Fisherman](https://github.com/fisherman/fisherman) with the Agnoster theme right now.

## Font

I use [Fira Code](https://github.com/tonsky/FiraCode) in VS Code. Once you've [installed](https://github.com/tonsky/FiraCode/wiki#installing-font) Fira Code, the setup in Code is quite easy.

![Fira Font](https://camo.githubusercontent.com/3a8948f34284f378ead7af5846aa432035c687ad/687474703a2f2f732e746f6e736b792e6d652f696d67732f666972615f636f64655f6c6f676f2e737667)

Open your user settings and add the following:

```json
  // Controls the font family.
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  // Controls the font size.
  "editor.fontSize": 14,
```

Boom! Bob's your uncle and you now have Fira Code in all it's awesome ligatureness (is that a word?).

## Custom Key Bindings

```json
// Place your key bindings in this file to overwrite the defaults
[
  {
    "key": "cmd+shift+z",
    "command": "workbench.action.terminal.focus"
  },
  {
    "key": "cmd+shift+a",
    "command": "workbench.action.terminal.focusNext"
  },
  {
    "key": "cmd+shift+s",
    "command": "workbench.action.terminal.focusPrevious"
  },
  {
    "key": "cmd+shift+x",
    "command": "workbench.action.terminal.kill"
  }
]
```

Also, if you're looking for great tips and tricks on Visual Studio code, check out [www.vscodetips.com](https://www.vscodetips.com). One last thing that I'm really looking forward to is the availabilty of [Live Share](https://code.visualstudio.com/blogs/2017/11/15/live-share).

Questions or comments? Hit me up on [Twitter](https://twitter.com/nickytonline/status/878284255146557444).
