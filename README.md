# iamdeveloper.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/95eaa9e0-a1c1-41d5-8818-a2edbd12e70d/deploy-status)](https://app.netlify.com/sites/romantic-saha-acc18d/deploys) [![Greenkeeper badge](https://badges.greenkeeper.io/nickytonline/www.iamdeveloper.com.svg)](https://greenkeeper.io/)

Hey there, I'm Nick and this is my site's source code. This site started off as a clone of the [Netlify CMS Gatsby Starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms 'Netlify CMS Gatsby Starter') (check it out!). Since then, I've tweaked it a lot and converted the codebase to TypeScript.

Feel free to peruse the code and/or fork it. 😉

Thanks to all the wonderful projects that made it possible to build this blog.

- [Babel](https://babeljs.io 'Babel website')
- [React](https://reactjs.org 'React website')
- [Gatsby](https://gatsbyjs.org 'Gatsby JS website')
- [TypeScript](https://www.typescriptlang.org 'TypeScript website')
- [Netlify](https://www.netlify.com 'Netlify Website') & [Netlify CMS](https://www.netlifycms.org 'Netlify CMS Website')
- [undraw.co](https://undraw.co 'undraw.co website')
- [simple-icons](https://github.com/simple-icons/simple-icons 'simple-icons repository website')
- and OSS in general.

To get up and running:

- clone the repository by running `git clone git@github.com:nickytonline/www.iamdeveloper.com.git` or `git clone https://github.com/nickytonline/www.iamdeveloper.com.git`
- run `npm install`
- run `npm run develop` to get up and running with the Gatsby development server.
- Since the project uses Babel and not TypeScript as the compiler, a separate process is required to run type checking. Open another terminal and run `npm run type-check:watch`
- If you're curious about why the Netlify CMS admin is built separately, see https://twitter.com/nickytonline/status/1095113113584787461. TLDR, it has it's own webpack config that isn't aware of the `gatbsy-plugin-typescript`.

Questions about Gatsby? Check out their [documentation](https://www.gatsbyjs.org/docs).
