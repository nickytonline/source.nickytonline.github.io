require('prismjs/themes/prism-solarizedlight.css');

// This stub is required so that the CSS loads when the site is built for production.
// https://github.com/gatsbyjs/gatsby/issues/5997#issuecomment-402356717
exports.onClientEntry = () => {
    console.log('All systems go!'); // eslint-disable-line no-console
};
