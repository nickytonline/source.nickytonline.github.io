---
title: 'Setting up Storybook for Preact'
date: '2018-09-02T00:00:00Z'
layout: post
draft: false
path: '/2018-09-02-setting-up-storybook-for-preact/'
category: 'UI/UX'
description: 'Getting set up with Preact and Storybook'
tags:
  - 'Preact'
---

In my last Storybook post, [Getting Started with Storybook for React](https://www.iamdeveloper.com/2018-03-26-getting-started-with-react-storybook), I showed you how to install Storybook for React and gave a quick breakdown of what all the pieces were. I suggest giving that a quick read before continuing here.

In this post, I’ll show you how to get React Storybook up and running with Preact. The assumption is that the project you want to add [Storybook](https://storybook.js.org) to already has [Preact](https://github.com/developit/preact) installed as a dependency.

1. A temporary step is to first install React, so run `npm install react`
2. If you have npx installed, run `npx @storybook/cli` (most people should have this if you’re on a newer version of node). If not run `npm install @storybook/cli -g`.
3. Next from the command line, run `getstorybook`
4. This will install all the dependencies you need to run Storybook.
5. Now let’s uninstall `react` from our dependencies as we want to use preact!
6. Next we need to install [preact-compat](https://github.com/developit/preact-compat) so that Preact will play nicely with Storybook. If you need preact-compat as a dependency for other react libraries, install it to dependencies, `npm install preact-compat`. Otherwise install it as a dev depency, i.e. `npm install preact-compat -D`
7. Almost there!
8. The last thing we need to do is tell [webpack](https://webpack.js.org) (what Storybook uses under the hood), to use preact-compat. To do this, we need to create a custom webpack configuration file for Storybook. Lucky for us, Storybook supports this out of the box. In the root folder where your package.json file is, there will be a new folder called `.storybook`. In there it contains files related to Storybook configuration. Create a new file in there called `webpack.config.js` and paste the following contents and save the file.

```
module.exports = {
  resolve: {
    extensions: [".js", "jsx"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  }
};
```

Note that this is a super bare bones webpack configuration. You can add anything else here you may need just like a regular webpack configuration file.

9. Storybook will create some demo stories for you found in the root folder of your app at `./stories/index.stories.js`
10. Open this file and remove the React reference and replace it with `import { h } from "preact";`
11. All that’s left to do is run `npm run storybook` and navigate to Storybook in a browser.

![Screenshot of Storybook in action](./assets/storybook.gif)

## Extras

- If you want to see an example of the final result, have a look at [my first commit to the dev.to repo](https://github.com/thepracticaldev/dev.to/commit/6a8df8c8ddec739280325c0000d6d32593f70ed0) I made in March of this year.

- I haven't had time yet, but I was [discussing with the Storybook maintainers](https://dev.to/norbertdelangen/comment/4ccd) about potentially having a config for Preact out of the box. Maybe I'll get to it at some point, but if you're interested, by all means go for it. 🙃
