import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post';
import { PagePreviewProps } from './page-preview-props';

export type BlogPostPreviewProps = PagePreviewProps;

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
    entry,
    widgetFor,
}) => (
    <BlogPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        date={entry.getIn(['data', 'date'])}
        tags={entry.getIn(['data', 'tags'])}
        title={entry.getIn(['data', 'title'])}
    />
);

BlogPostPreview.displayName = 'BlogPostPreview';
