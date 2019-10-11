---
templateKey: blog-post
title: My Shell Aliases
date: 2019-10-11T01:45:17.110Z
description: 'Some of the aliases I have for my preferred shell, zsh'
tags:
  - zsh
  - cli
  - shell
---
Everyone has their favourite aliases for git and the shell. I have written about [my git aliases](https://www.iamdeveloper.com/blog/2018-08-25-my-git-aliases/) before but not my shell aliases. It is not a long list, but I have some that I find useful that you may find useful as well.

Currently, my preferred shell is zsh. Here is what I currently have in config.

```
alias zshconfig='vi $HOME/.zshrc'
alias rimraf='rm -rf'
alias flushdns='sudo killall -HUP mDNSResponder'
alias y='yarn' # I am lazy, one character FTW. YOLO
alias ni='npm install'
alias nr='npm run'
alias g='git'
alias code='code-insiders'

alias edge='/Applications/Microsoft\ Edge\ Beta.app/Contents/MacOS/Microsoft\ Edge\ Beta --remote-debugging-port=2015'
lias chrome='/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222'i

crat() {
        npx create-react-app $1 --typescript
}
```

The `edge` and `chrome` aliases are useful to me because I like to use VS Code when debugging. Having the browsers start up with remote debugging makes that process easier.

What's in your shell aliases? [Leave a comment here](https://dev.to/nickytonline/my-shell-aliases-1obk#comments).
