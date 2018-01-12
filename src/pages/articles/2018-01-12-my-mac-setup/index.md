---
title: "My Mac Setup"
date: "2018-01-12T10:00:00Z"
layout: post
draft: false
path: "/my-mac-setup/"
category: "Productivity"
description: "An overview of tools and applications I have installed on my Mac."
tags:
  - "Developer Tools"
---

Maybe I should start a series called “Not just a Gist”, as I’m slowly converting gists of mine to blog posts. The last one I converted was all about [My Visual Studio Code Setup](https://vscode.iamdeveloper.com).

I participated in this week’s [#devdiscuss about tooling](https://twitter.com/ThePracticalDev/status/950910573369229313), and I posted a few links to gists that are my setup on my Mac.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Notables are <a href="https://twitter.com/code?ref_src=twsrc%5Etfw">@code</a>, <a href="https://t.co/Cn6SqW1SfF">https://t.co/Cn6SqW1SfF</a> and <a href="https://twitter.com/alfredapp?ref_src=twsrc%5Etfw">@alfredapp</a>. Other Mac tooling at <a href="https://t.co/PFVjlJ5wzR">https://t.co/PFVjlJ5wzR</a> and Git CLI with <a href="https://t.co/nwai7eEx4D">https://t.co/nwai7eEx4D</a> <a href="https://twitter.com/hashtag/devdiscuss?src=hash&amp;ref_src=twsrc%5Etfw">#devdiscuss</a> <a href="https://twitter.com/hashtag/devtools?src=hash&amp;ref_src=twsrc%5Etfw">#devtools</a> <a href="https://twitter.com/hashtag/productivity?src=hash&amp;ref_src=twsrc%5Etfw">#productivity</a></p>&mdash; Nick Taylor (@nickytonline) <a href="https://twitter.com/nickytonline/status/950912727622529024?ref_src=twsrc%5Etfw">January 10, 2018</a></blockquote>

## Tools you absolutely need on your Mac

* The Homebrew duo. These are a must have to simplify installing most things on your Mac. As soon as these are installed, you may proceed.
* [Homebrew](https://brew.sh) - run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` from the command line to install it.
* [Homebrew Cask](https://caskroom.github.io) - run `brew tap caskroom/cask` from the command line to install it.
* [Spectacle](https://www.spectacleapp.com), the best application I’ve found for managing windows on MacOS. This is especially useful for anyone coming from Windows who are used to this out of the box functionality. Run `brew cask install spectacle` from the command line to install it.
* [Alfred](https://www.alfredapp.com) ([buy the Alfred Powerpack](https://www.alfredapp.com/powerpack/buy/) to get the full use of Alfred). Run `brew cask install alfred` from the command line to install it.

### Alfred Setup

Alfred is so awesome, it deserves it’s own section in this post. It’s basically Spotlight on steroids and a bag of chips. It’s more than an application launcher. It allows you to create workflows for repetitive tasks you do everyday and there is also a huge array of existing [workflows](https://www.alfredapp.com/workflows/) for it available. I even decided to make some of my own, [nickytonline/alfred-workflows: Hopefully useful workflows for Alfred](https://github.com/nickytonline/alfred-workflows).

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Also, this Alfred workflow is awesome for my workflow with GitHub, <a href="https://t.co/fjNOo6iuvL">https://t.co/fjNOo6iuvL</a> <a href="https://twitter.com/hashtag/devdiscuss?src=hash&amp;ref_src=twsrc%5Etfw">#devdiscuss</a> <a href="https://twitter.com/hashtag/git?src=hash&amp;ref_src=twsrc%5Etfw">#git</a></p>&mdash; Nick Taylor (@nickytonline) <a href="https://twitter.com/nickytonline/status/950915346596327424?ref_src=twsrc%5Etfw">January 10, 2018</a></blockquote>

I never used Alfred until this past summer. Why did I not use it sooner?!

*(╯°□°）╯︵ ┻━┻*

The Syntax FM podcast has a great episode on tooling, including Alfred, [Our favourite Productivity Hacks 🔥 — Syntax Podcast 011](https://syntax.fm/show/011/our-favourite-productivity-hacks). You should check it out.

At the time of this writing, here’s all the workflows that I currently have installed:

* [yannickglt/alfred-devdocs: Alfred workflow for devdocs.io](https://github.com/yannickglt/alfred-devdocs). [Grab it from Packal](https://github.com/packal/repository/raw/master/com.yannickglt.alfred2.devdocs/devdocs.alfredworkflow). Search [DevDocs](https://devdocs.io/) straight from the Alfred search bar.
* [carlosgaldino/alfred-emoji-workflow: Alfred 2 workflow for searching emoji codes.](https://github.com/carlosgaldino/alfred-emoji-workflow). Grab it [here](https://github.com/carlosgaldino/alfred-emoji-workflow/raw/master/package/emoji-codes.alfredworkflow). I use this to get emojis super ⚡ fast ⚡. I just used it to put those two lightning bolts in this post!
* [willfarrell/alfred-encode-decode-workflow: Encoding and decoding a sting into multiple variations.](https://github.com/willfarrell/alfred-encode-decode-workflow). Grab it [here](https://raw.github.com/willfarrell/alfred-encode-decode-workflow/master/encode-decode.alfredworkflow). A super quick way to encode/decode text.
* [ruedap/alfred-font-awesome-workflow](https://github.com/ruedap/alfred-font-awesome-workflow). Grab it [here](https://github.com/ruedap/alfred-font-awesome-workflow/raw/master/Font-Awesome.alfredworkflow).
* [gharlan/alfred-github-workflow: GitHub Workflow for Alfred 3](https://github.com/gharlan/alfred-github-workflow). Grab it [here](https://github.com/gharlan/alfred-github-workflow/releases).
* [ngreenstein/alfred-process-killer](https://github.com/nathangreenstein/alfred-process-killer). Grab it [here](https://github.com/ngreenstein/alfred-process-killer/blob/master/Kill%20Process.alfredworkflow?raw=true).
* [RunCommand](http://www.packal.org/workflow/runcommand). I only really use this to start Visual Studio Code from the command line.
* [StackOverflow Search](http://www.packal.org/workflow/stackoverflow-search). Search stackoverflow.com right from Alfred. The only tweak I did to this workflow was change the keyword to launch it. I switched `.so` to `sos`. Otherwise it launches the RunCommand workflow and errors out because of the initial `.` running an invalid command. I also find it funny that I called it `sos`. Send help! 🆘
* [TimeZones](http://geekzone.philosophicalzombie.net/post/45823505821/alfred-workflow-timezones-a-customizable-world). Grab it [here](http://cl.ly/UamX/download/TimeZones v1.7.alfredworkflow). A super quick to get the time in a country or city.
* [UUIDgen](http://www.packal.org/workflow/uuidgen).
* [Packal Updater](http://www.packal.org/workflow/packal-updater). It updates any workflows you have that you grabbed via [Packal](http://www.packal.org), a popular workflow and themes directory for Alfred.
* These are some workflows I opened sourced that I find handy, [nickytonline/alfred-workflows: Hopefully useful workflows for Alfred](https://github.com/nickytonline/alfred-workflows).
* I have a few others I made, but they’re just simple workflows for opening stuff like my Google Music. It uses an Alfred workflow template to just open a URL. Try making one yourself! I promise it’s not hard.

If you use Alfred and have some workflows that are not listed here, please mention them in the comments. I'm always looking for new ones to improve my whole dev workflow.

## Tools for Web Development

* [VS Code](https://code.visualstudio.com), here's [my setup](http://vscode.iamdeveloper.com). Run `brew cask install visual-studio-code` from the command line to install it.
* [n](https://github.com/tj/n), run `brew install n` from the command line to install it.
* [now.sh](https://now.sh), great for hosting but also great for knocking out some POCs and deploying it. Run `brew cask install now` from the command line to install it.
* [Docker](https://www.docker.com/get-docker), containerize all the things! Run `brew cask install docker` from the command line to install it.
* [FiraCode font](https://github.com/tonsky/FiraCode) for my shell and my favourite editor.

## Shell/Terminal Setup

* [iTerm2](https://www.iterm2.com/) - run brew `cask install iterm2` from the command line to install it.
* [Fish shell](http://fishshell.com) - run brew `cask install fish` from the command line to install it.
* [Fisherman](https://github.com/fisherman/fisherman), run `curl -Lo ~/.config/fish/functions/fisher.fish --create-dirs https://git.io/fisher` from the command line to install it.
* edc/bass (to support bash utilities) - Assumes Fisherman is installed. Run `fisher edc/bass` from the command line to install it.
* I use the git CLI with [git aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases). Here's my list of [git aliases](https://gitaliases.iamdeveloper.com).

## Useful Utilities

* [Unarchiver](https://theunarchiver.com) - run `brew cask install the-unarchiver` from the command line to install it.
* [Amphetamine](https://itunes.apple.com/us/app/amphetamine/id937984704), sometimes you just want your laptop to stay awake… 💊
* [VLC](https://www.videolan.org/vlc/download-macosx.html) - run `brew cask install vlc` from the command line to install it.
* [f.lux](https://justgetflux.com), so you can be nice to your 👀 in the evening. Run `brew cask install flux` from the command line to install it.
* [Dropbox](https://www.dropbox.com/downloading), I use it to sync my Alfred settings, fish, fisherman etc. via symlinks.Run `brew cask install dropbox` from the command line to install it.
* [dark-mode](https://github.com/sindresorhus/dark-mode) - run `brew install dark-mode` from the command line to install it.
* [vanilla](http://matthewpalmer.net/vanilla) for OS X menu bar. Hide the clutter. Run `brew cask install vanilla` from the command line to install it.
* [Slack](https://slack.com/downloads/osx)
* [Trello](https://itunes.apple.com/app/trello/id1278508951?mt=12), I’m using this less and less though since I discovered Bear. I’ve fallen more in a todo list mode with [Bear](http://www.bear-writer.com/).
* [Bear](http://www.bear-writer.com/), this is definitely my favourite new app. It’s the first note taking app that I’m consistently using. I think it’s all due to markdown support and simplicity.
* [LiceCap](https://www.cockos.com/licecap/licecap125.dmg), for animated GIF screen captures. I find this tool very easy to use and the animated screen captures are pretty decent. Run `brew cask install licecap` from the command line to install it.

## Tweaking MacOS

* [Prevent Mission control from rearranging Spaces](https://spigotdesign.com/prevent-mission-control-rearranging-desktop-spaces). This drives me nuts, so I remove the setting. I arrange my spaces because I want them to stay like that.
* If you’re on a Mac with a Touchbar, map the function keys to always be used when in browsers, your editors or any other tools you use for dev.

That’s pretty much the round up of what I have on my machine at the moment. I should probably get around to writing a script that installs all this, but for the time being, other priorities.

I’m always looking for new tools to make me more efficient, so feel free to chime in in the comments below.