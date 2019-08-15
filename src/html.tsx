import * as React from 'react';

export interface HTMLProps {
    htmlAttributes: React.HTMLAttributes<HTMLHtmlElement>;
    headComponents: React.ReactNode;
    bodyAttributes: React.HTMLAttributes<HTMLBodyElement>;
    preBodyComponents: React.ReactNode;
    body: string;
    postBodyComponents: React.ReactNode;
}

const HTML: React.FC<HTMLProps> = React.memo(
    ({
        htmlAttributes,
        headComponents,
        bodyAttributes,
        preBodyComponents,
        body,
        postBodyComponents,
    }) => {
        return (
            <html {...htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {headComponents}
                </head>
                <body {...bodyAttributes}>
                    {preBodyComponents}
                    <div
                        key="body"
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: body }}
                    />
                    {postBodyComponents}
                    <noscript>
                        <p>This site requires that JavaScript be enabled.</p>
                    </noscript>
                </body>
            </html>
        );
    },
);

HTML.displayName = 'HTML';

export default HTML;
