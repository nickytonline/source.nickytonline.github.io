import React from 'react';

export interface ContentProps<T = React.ReactNode> {
    content: T;
    className?: string;
}

export type HtmlContentProps = ContentProps<string>;

export const HTMLContent: React.FC<HtmlContentProps> = ({
    content,
    className,
}) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const Content: React.FC<ContentProps> = ({ content, className }) => (
    <div className={className}>{content}</div>
);
