---
templateKey: blog-post
title: Pock an awesome utility for the Mac Touchbar
devto_link: 'https://dev.to/nickytonline/pock-an-awesome-utility-for-the-mac-touchbar-11ia'
date: 2020-01-21T02:53:20.203Z
description: Pock an awesome utility for the Mac Touchbar
tags:
  - productivity
  - macos
---
I'm on a Mac and I honestly have no use for the Dock. I actually hide it for an eternity so it never appears by running the following command.

`defaults write com.apple.Dock autohide-delay -float 1000000`

I use Alfred and that basically gives me all I really need in terms of opening apps and then I can use <kbd>⌘</kbd> + <kbd>TAB</kbd> to switch apps.

I also do not really use the touch bar except for mapping it to function keys (<kbd>F1</kbd> - <kbd>F12</kbd>) when I have a browser open or VS Code.

![Keyboard preferences for mapping function keys in touch bar for certain apps](https://raw.githubusercontent.com/nickytonline/www.iamdeveloper.com/master/static/img/keyboard_settings_mapped_shortcuts_touchbar.png)

Having said that, I came across a very interesting project a few weeks ago called [Pock](https://github.com/pigigaldi/Pock) that lets you put the Dock into the touch bar. This combined with "permanently" hiding the Dock makes the touch bar more useful for me. If I'm honest, it's just to see if I have a Slack notification, but that alone is worth it.

![Pock in action](/img/pock_in_action.jpg)
