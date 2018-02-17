import React from 'react';
import PropTypes from 'prop-types';
import favicon16x16 from './assets/favicon/favicon-16x16.png';
import favicon96x96 from './assets/favicon/favicon-96x96.png';
import favicon32x32 from './assets/favicon/favicon-32x32.png';
import android192x192 from './assets/favicon/android-icon-192x192.png';
import apple180x180 from './assets/favicon/apple-icon-180x180.png';
import apple152x152 from './assets/favicon/apple-icon-152x152.png';
import apple144x144 from './assets/favicon/apple-icon-144x144.png';
import apple120x120 from './assets/favicon/apple-icon-120x120.png';
import apple114x114 from './assets/favicon/apple-icon-114x114.png';
import apple76x76 from './assets/favicon/apple-icon-76x76.png';
import apple72x72 from './assets/favicon/apple-icon-72x72.png';
import apple60x60 from './assets/favicon/apple-icon-60x60.png';
import apple57x57 from './assets/favicon/apple-icon-57x57.png';

class HTML extends React.Component {
  render() {
    const { postBodyComponents, headComponents, body } = this.props;
    let styles;
    if (process.env.NODE_ENV === 'production') {
      try {
        // eslint-disable-next-line import/no-webpack-loader-syntax
        styles = require('!raw-loader!../public/styles.css');
      } catch (e) {
        console.log(e);
      }
    }

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" sizes="57x57" href={apple57x57} />
          <link rel="apple-touch-icon" sizes="60x60" href={apple60x60} />
          <link rel="apple-touch-icon" sizes="72x72" href={apple72x72} />
          <link rel="apple-touch-icon" sizes="76x76" href={apple76x76} />
          <link rel="apple-touch-icon" sizes="114x114" href={apple114x114} />
          <link rel="apple-touch-icon" sizes="120x120" href={apple120x120} />
          <link rel="apple-touch-icon" sizes="144x144" href={apple144x144} />
          <link rel="apple-touch-icon" sizes="152x152" href={apple152x152} />
          <link rel="apple-touch-icon" sizes="180x180" href={apple180x180} />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={android192x192}
          />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
          <link rel="icon" type="image/png" sizes="96x96" href={favicon96x96} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
          <link rel="manifest" href="/manifest.json" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {headComponents}
          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  postBodyComponents: PropTypes.node.isRequired,
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired
};

export default HTML;
