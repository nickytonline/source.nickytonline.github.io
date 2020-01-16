import React from 'react';

export interface ContentProps<T = React.ReactNode> {
    content: T;
    className?: string;
}

export type HtmlContentProps = ContentProps<string>;

export const HTMLContent: React.FC<HtmlContentProps> = React.memo(
    ({ content, className }) => (
        <main
            className={className}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    ),
);

HTMLContent.displayName = 'HTMLContent';

export const Content: React.FC<ContentProps> = ({ content, className }) => (
    <main className={className}>{content}</main>
);

Content.displayName = 'Content';
