import React from 'react';
import PropTypes from 'prop-types';

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
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
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
