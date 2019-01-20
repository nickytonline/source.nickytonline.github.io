import React from 'react';
import { ThanksPageTemplate } from '../../templates/thanks-page';
import { PagePreviewProps } from './page-preview-props';

export type ThanksPagePreviewProps = PagePreviewProps;

export const ThanksPagePreview: React.FC<ThanksPagePreviewProps> = ({
  entry,
  widgetFor,
}) => (
  <ThanksPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ThanksPagePreview.displayName = 'ThanksPagePreview';
