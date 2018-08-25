---
title: 'My Git Aliases'
date: '2018-08-24T00:00:00Z'
layout: post
draft: true
path: '/2018-08-24-my-git-aliases/'
category: 'Productivity'
description: 'A list of my git aliases and what they do'
tags:
  - 'git'
---

Alright, so Phil Nash [roped me into this one](https://dev.to/philnash/comment/518o). This keeps in line with my other posts that are “Not just a Gist”. If you want to read about those posts, check out [mac.iamdeveloper.com](https://mac.iamdeveloper.com) and [vscode.iamdeveloper.com](https://vscode.iamdeveloper.com). This post's birth comes from [gitaliases.iamdeveloper.com](https://gitaliases.iamdeveloper.com) which is essentially a copy paste of my git aliases.

I'm going to provide my list of git aliases and explain what each alias does, plain and simple. Let's get started! 🏁 For those new to git aliases, please see the [defacto docs on aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases).

Before we get started, why git aliases? Well for one thing, I don't know about you, but some git commands are hard to remember and also, we're programmers, which means we're lazy by default to be efficient. 🐢 --> 🐇

1. `alias.a add .`

Running `git add` will add all files that have changed as staged.

2. `alias.aliases config --get-regexp alias`

Running `git aliases` will show all the aliases you have configured globally in git.

3. `alias.bi bisect`

Running `git bi` will run git's [bisect](https://git-scm.com/docs/git-bisect) to help you figure out which commit has a bug.

4. `alias.ci commit -m`

This will commit a file with the message you specify, e.g. `git ci "awesome commit!"`.

5. alias.co checkout

This will checkout the branch you specify, e.g. `git co my-awesome-branch`

6. `alias.colast checkout -`

Running `git colast` will checkout the previous branch you were working in.

7. `alias.db branch -D`

This will delete the branch you specify, e.g. `git db my-not-so-awesome-branch`. Note that this will only work if the branch you're deleting is not the one you're currently working in.

8. `alias.laf fsck --lost-found`

Running `git laf` will bring you to [git's lost and found](https://git-scm.com/docs/git-lost-found).

9. alias.last log -1 HEAD

Running `git last` will show you what your last commit was.

10. `alias.nb checkout -b`

This will create a new branch, e.g. `git nb my-awesome-branch`.

11. `alias.pror remote prune origin`

Running `git pror` will do some cleanup on the `origin` remote via [pruning](https://git-scm.com/docs/git-prune).

12. `alias.pr pull --rebase`

This will rebase your current branch with the branch specified, e.g. `git pr develop`.

13. `alias.ra rebase --abort`

Running `git ra` will abort a [rebase](https://git-scm.com/docs/git-rebase). Run this when you're like, my rebase is currently messed up. Get me outta here!

14. `alias.rc rebase --continue`

Running `git rc` will continue a [rebase](https://git-scm.com/docs/git-rebase). You typically run this when you've handled any conflicts in a rebase.

15. `alias.pf push --force-with-lease`

Running `git pf` forces a push, but it is a little less destructive than forcing a push. See here for more info on [--force-with-lease vs. --force](https://developer.atlassian.com/blog/2015/04/force-with-lease).

16. `alias.psu push --set-upstream`

Run this when you want to push a branch for the first time to the remote (typically `origin`), e.g. `git psu origin my-awesome-branch`.

17. `alias.remotes remote -v`

Running `git remotes` shows all the remotes currently configured for a repository.

18. `alias.renb branch -m`

When you want to rename a branch, run e.g. `git renb my-awesom-branch my-awesome-branch`.

19. `alias.rhh reset --hard HEAD`

The nuclear option. Run `git rhh` to wipe out all you changes and start from the `HEAD`.

20. `alias.rh reset --hard`

When you specify what to reset to, a hard reset is performed, e.g. `git rh HEAD~2`.

alias.sfc diff-tree --no-commit-id --name-only -r

alias.s status -s

alias.stashes stash list

alias.unstash stash pop

alias.vc clean -dfx

alias.refactor commit -m 👷Refactor

alias.formatting commit -m 💅Formatting

alias.comments commit -m 📒Comments

alias.tests commit -m ✅Tests

alias.prum pull --rebase upstream master
