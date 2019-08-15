import React from 'react';

export interface ContentProps<T = React.ReactNode> {
    content: T;
    className?: string;
}

export type HtmlContentProps = ContentProps<string>;

export const HTMLContent: React.FC<HtmlContentProps> = React.memo(
    ({ content, className }) => (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    ),
);

HTMLContent.displayName = 'HTMLContent';

export const Content: React.FC<ContentProps> = ({ content, className }) => (
    <div className={className}>{content}</div>
);

Content.displayName = 'Content';
