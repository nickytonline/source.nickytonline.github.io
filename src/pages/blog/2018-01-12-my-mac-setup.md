---
templateKey: blog-post
title: My Mac Setup
date: 2018-01-12T21:03:00.000Z
description: An overview of tools and applications I have installed on my Mac.
tags:
  - developertools
---

Maybe I should start a series called “Not just a Gist”, as I’m slowly converting gists of mine to blog posts. The last one I converted was all about [My Visual Studio Code Setup](https://vscode.iamdeveloper.com).

I participated in this week’s [\#devdiscuss about tooling](https://twitter.com/ThePracticalDev/status/950910573369229313), and I posted a few links to gists that are my setup on my Mac.

https://twitter.com/nickytonline/status/950912727622529024

## Tools you absolutely need on your Mac

- The Homebrew duo. These are a must have to simplify installing most things on your Mac. As soon as these are installed, you may proceed.
  - [Homebrew](https://brew.sh) - run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` from the command line to install it.
  - [Homebrew Cask](https://caskroom.github.io) - run `brew tap caskroom/cask` from the command line to install it.
- [Spectacle](https://www.spectacleapp.com), the best application I’ve found for managing windows on macOS. This is especially useful for anyone coming from Windows who are used to this out of the box functionality. Run `brew cask install spectacle` from the command line to install it.
- [Alfred](https://www.alfredapp.com) ([buy the Alfred Powerpack](https://www.alfredapp.com/powerpack/buy/) to get the full use of Alfred). Run `brew cask install alfred` from the command line to install it.

### Alfred Setup

Alfred is so awesome, it deserves it’s own section in this post. It’s basically Spotlight on steroids and a bag of chips. It’s more than an application launcher. It allows you to create workflows for repetitive tasks you do everyday and there is also a huge array of existing [workflows](https://www.alfredapp.com/workflows/) for it available. I even decided to make some of my own, [nickytonline/alfred-workflows: Hopefully useful workflows for Alfred](https://github.com/nickytonline/alfred-workflows).

https://twitter.com/nickytonline/status/950915346596327424

![Screenshot of Alfred Github workflow in action](/img/alfred-gh-workflow.png)

I never used Alfred until this past summer. Why did I not use it sooner?!

[_(╯°□°）╯︵ ┻━┻_](https://dev.to/nickytonline/quick-hulk-code-pen-18i1)

The Syntax FM podcast has a great episode on tooling, including Alfred, [Our favourite Productivity Hacks 🔥 — Syntax Podcast 011](https://syntax.fm/show/011/our-favourite-productivity-hacks). You should check it out.

Along with workflows, you can also install themes. I like [Wes Bos](https://dev.to/wesbos)’ Cobalt 2 theme for other things and I guess since Wes is a huge fan of Alfred, he decided to make the theme for Alfred as well. Download the [raw Cobalt 2 theme file](https://raw.githubusercontent.com/wesbos/Cobalt2-Alfred-Theme/master/Cobalt2-alfred3.x.alfredappearance) from the [github.com/wesbos/Cobalt2-Alfred-Theme](https://github.com/wesbos/Cobalt2-Alfred-Theme) repository. Once downloaded, open the file and it will ask you if you want to import the theme into Alfred.

![Screenshot of the Alfred theme picker](/img/alfred-theme.png)

Click the import button and Alfred has been Cobalted.

![Screenshot of Cobalt2 theme selected in Alfred](/img/cobalt2-theme.png)

At the time of this writing, here’s all the workflows that I currently have installed:

- [yannickglt/alfred-devdocs: Alfred workflow for devdocs.io](https://github.com/yannickglt/alfred-devdocs). [Grab it from Packal](https://github.com/packal/repository/raw/master/com.yannickglt.alfred2.devdocs/devdocs.alfredworkflow). Search [DevDocs](https://devdocs.io/) straight from the Alfred search bar.
- [carlosgaldino/alfred-emoji-workflow: Alfred 2 workflow for searching emoji codes.](https://github.com/carlosgaldino/alfred-emoji-workflow). Grab it [here](https://github.com/carlosgaldino/alfred-emoji-workflow/raw/master/package/emoji-codes.alfredworkflow). I use this to get emojis super ⚡ fast ⚡. I just used it to put those two lightning bolts in this post!
- [willfarrell/alfred-encode-decode-workflow: Encoding and decoding a sting into multiple variations.](https://github.com/willfarrell/alfred-encode-decode-workflow). Grab it [here](https://raw.github.com/willfarrell/alfred-encode-decode-workflow/master/encode-decode.alfredworkflow). A super quick way to encode/decode text.
- [ruedap/alfred-font-awesome-workflow](https://github.com/ruedap/alfred-font-awesome-workflow). Grab it [here](https://github.com/ruedap/alfred-font-awesome-workflow/raw/master/Font-Awesome.alfredworkflow).
- [gharlan/alfred-github-workflow: GitHub Workflow for Alfred 3](https://github.com/gharlan/alfred-github-workflow). Grab it [here](https://github.com/gharlan/alfred-github-workflow/releases).
- [ngreenstein/alfred-process-killer](https://github.com/nathangreenstein/alfred-process-killer). Grab it [here](https://github.com/ngreenstein/alfred-process-killer/blob/master/Kill%20Process.alfredworkflow?raw=true).
- [RunCommand](http://www.packal.org/workflow/runcommand). I only really use this to start Visual Studio Code from the command line.
- [StackOverflow Search](http://www.packal.org/workflow/stackoverflow-search). Search stackoverflow.com right from Alfred. The only tweak I did to this workflow was change the keyword to launch it. I switched `.so` to `sos`. Otherwise it launches the RunCommand workflow and errors out because of the initial `.` running an invalid command. I also find it funny that I called it `sos`. Send help! 🆘
- [TimeZones](http://geekzone.philosophicalzombie.net/post/45823505821/alfred-workflow-timezones-a-customizable-world). Grab it \[here](<http://cl.ly/UamX/download/TimeZones> v1.7.alfredworkflow). A super quick way to get the time in a country or city.
- [UUIDgen](http://www.packal.org/workflow/uuidgen).
- [Packal Updater](http://www.packal.org/workflow/packal-updater). It updates any workflows you have that you grabbed via [Packal](http://www.packal.org), a popular workflow and themes directory for Alfred.
- These are some workflows I opened sourced that I find handy, [nickytonline/alfred-workflows: Hopefully useful workflows for Alfred](https://github.com/nickytonline/alfred-workflows).
- I have a few others I made, but they’re just simple workflows for opening stuff like my Google Music. It uses an Alfred workflow template to just open a URL. Try making one yourself! I promise it’s not hard.
- **Update 2018/01/27: Found the [MDN Search](http://www.packal.org/workflow/mdn-search) workflow. Super handy!**

If you use Alfred and have some workflows that are not listed here, please mention them in the comments. I’m always looking for new ones to improve my whole dev workflow.

You can also launch the terminal from Alfred, by typing `>` in the Alfred search bar followed by the command you wish to run. Since I use iTerm, I want that to open instead of the default Terminal app. Since [Alfred 2.7.2](https://www.alfredapp.com/blog/tips-and-tricks/better-iterm-integration-in-alfred), you can run a custom Applescript to launch another terminal application. Open the Alfred preferences window and click on the Features button in the top of the preferences window then click on the Terminal / Shell button at the bottom. In the Application drop down menu, select Custom and paste in [this script](https://raw.githubusercontent.com/stuartcryan/custom-iterm-applescripts-for-alfred/master/custom_iterm_script_iterm_2.9.applescript) from the [Custom iTerm Applescripts for Alfred](https://github.com/stuartcryan/custom-iterm-applescripts-for-alfred) repository.

![Screenshot of the terminal settings in Alfred](/img/alfred-terminal-shell-settings.png)

You're all good to go. To test it out launch Alfred and in the search bar type `> ls` and press ENTER. iTerm should open up with a listing of the current directory.

## Tools for Web Development

- [VS Code](https://code.visualstudio.com), here’s [my setup](http://vscode.iamdeveloper.com). Run `brew cask install visual-studio-code` from the command line to install it.
- [n](https://github.com/tj/n), for installing different versions of node. I’m sure someone is going to suggest using [nvm](https://github.com/creationix/nvm). The problem was though, when I switched from [zsh](http://www.zsh.org/) (another great choice for a shell), I was unable to get nvm working with fish, so I just switched to n which works super well. Run `brew install n` from the command line to install it.
- [now.sh](https://now.sh), great for hosting but also great for knocking out some POCs and deploying it. Run `brew cask install now` from the command line to install it.
- [Docker](https://www.docker.com/get-docker), containerize all the things! Run `brew cask install docker` from the command line to install it.
- [Fira Code font](https://github.com/tonsky/FiraCode) for my shell and my favourite editor. Run the following only once as it's used for installing any font, `brew tap caskroom/fonts`. Once that is installed, you can install Fira Code by running `brew cask install font-fira-code`.
- I’ve discovered what the [whole commotion is about `npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b), so I’ve also added that to my tool belt. Thanks [Peter Kühne](https://dev.to/peter_kuehne/comment/213k)!

## Shell/Terminal Setup

- [iTerm2](https://www.iterm2.com/), a better terminal than the out of the box macOS terminal app. Run brew `cask install iterm2` from the command line to install it.
- [Fish shell](http://fishshell.com), a better shell experience. Run brew `cask install fish` from the command line to install it.
- [Fisherman](https://github.com/fisherman/fisherman), for themes and other utilities for the fish shell. Run `curl -Lo ~/.config/fish/functions/fisher.fish --create-dirs https://git.io/fisher` from the command line to install it.
- edc/bass (to support bash utilities) - Assumes Fisherman is installed. Run `fisher edc/bass` from the command line to install it.
- I use the git CLI with [git aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases). Here’s my list of [git aliases](https://gitaliases.iamdeveloper.com).
- fish shell aliases I use because I'm a lazy typer or just can't remember the real command. Feel free to run the script snippet below to add them to your 🐡 🐚 .\*\*

```bash
alias cg="eval \"git clone git@github.com:$argv.git\"" # Clones a gist, just pass in the gist ID
funcsave cg

alias flushdns="sudo killall -HUP mDNSResponder" # Because I never remember this command
funcsave flushdns

alias g="git"
funcsave g

alias glog="git log --oneline --decorate --all --graph"
funcsave glog

# Check out a PR
alias copr="eval \"git fetch origin pull/$argv/head:pr$argv\""
funcsave copr

alias y="yarn"  # Some say I live dangerously aliasing this to 'y'. I say yolo.
funcsave y

alias nib="node --inspect-brk" # nib path-to-my-file/my-file.js
funcsave nib

# When you want to just hash out an idea for something web
# Automatic page reloading and assets. Requires npx so
# ensure your npm is upgraded to the latest and greatest.
alias hot="npx browser-sync start --server src/ --files \"src/*.html\" \"src/css/*.css\" \"src/js/*.js\""
funcsave hot
```

## Useful Utilities

- [The Unarchiver](https://theunarchiver.com) - run `brew cask install the-unarchiver` from the command line to install it.
- [Amphetamine](https://itunes.apple.com/us/app/amphetamine/id937984704), sometimes you just want your laptop to stay awake… 💊
- [VLC](https://www.videolan.org/vlc/download-macosx.html) - run `brew cask install vlc` from the command line to install it.
- [f.lux](https://justgetflux.com), so you can be nice to your 👀 in the evening. Run `brew cask install flux` from the command line to install it.
- [Dropbox](https://www.dropbox.com/downloading), I use it to sync my Alfred settings, fish, fisherman etc. via symlinks.Run `brew cask install dropbox` from the command line to install it.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - run `brew install dark-mode` from the command line to install it.
- [vanilla](http://matthewpalmer.net/vanilla) for OS X menu bar. Hide the clutter. Run `brew cask install vanilla` from the command line to install it.
- [Slack](https://slack.com/downloads/osx)
- [Trello](https://itunes.apple.com/app/trello/id1278508951?mt=12), I’m using this less and less though since I discovered Bear. I’ve fallen more in a todo list mode with [Bear](http://www.bear-writer.com/).
- [Bear](http://www.bear-writer.com/), this is definitely my favourite new app. It’s the first note taking app that I’m consistently using. I think it’s all due to markdown support and simplicity.
- [LiceCap](https://www.cockos.com/licecap), for animated GIF screen captures. I find this tool very easy to use and the animated screen captures are pretty decent. Run `brew cask install licecap` from the command line to install it.
- Onyx. It's great for general maintenance of your computer. To install it run `brew cask install onyx`.

## Tweaking macOS

- [Prevent Mission control from rearranging Spaces](https://spigotdesign.com/prevent-mission-control-rearranging-desktop-spaces). This drives me nuts, so I remove the setting. I arrange my spaces because I want them to stay like that.
- If you’re on a Mac with a Touchbar, map the function keys to always be used when in browsers, your editors or any other tools you use for dev.

That’s pretty much the round up of what I have on my machine at the moment. I should probably get around to writing a script that installs all this, but for the time being, other priorities.

I’m always looking for new tools to make me more efficient, so feel free to chime in in the comments below.

And here's the link to [my mac setup script](https://gist.github.com/nickytonline/729fc106a0146345c0b90f3356a41e4d#file-my-mac-setup-sh 'my mac setup script') which I made a little while's after this blog post. It's not perfect, but it's helped me set up a few machines pretty easily.
