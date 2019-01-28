import React from 'react';
import { AboutPageTemplate } from '../../templates/about-page';
import { PagePreviewProps } from './page-preview-props';

export type AboutPagePreviewProps = PagePreviewProps;

export const AboutPagePreview: React.FC<AboutPagePreviewProps> = ({
    entry,
    widgetFor,
}) => (
    <AboutPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
);

AboutPagePreview.displayName = 'AboutPagePreview';
