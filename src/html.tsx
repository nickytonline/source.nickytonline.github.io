import * as React from 'react';

export type HTMLProps = {
  htmlAttributes:
  headComponents: React.ReactNode;
  bodyAttributes:
  preBodyComponents: React.ReactNode;
  body: string;
  postBodyComponents: React.ReactNode;
}

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <noscript>
            <p>This site requires that JavaScript be enabled.</p>
          </noscript>
        </body>
      </html>
    );
  }
}