import React from 'react';

export type ContentProps = {
  content: React.ReactNode;
  className: string;
};

export type HtmlContentProps = {
  content: string;
  className: string;
};

export const HTMLContent: React.FC<HtmlContentProps> = ({
  content,
  className,
}) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const Content: React.FC<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);
