import React from 'react';
import { ContactPageTemplate } from '../../templates/contact-page';
import { PagePreviewProps } from './page-preview-props';

export type ContactPagePreviewProps = PagePreviewProps;

export const ContactPagePreview: React.FC<ContactPagePreviewProps> = ({
    entry,
    widgetFor,
}) => (
    <ContactPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
);

ContactPagePreview.displayName = 'ContactPagePreview';
