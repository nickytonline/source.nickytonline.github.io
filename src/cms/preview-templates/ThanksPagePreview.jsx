import React from 'react';
import PropTypes from 'prop-types';
import { ThanksPageTemplate } from '../../templates/thanks-page';

const ThanksPagePreview = ({ entry, widgetFor }) => (
  <ThanksPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ThanksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ThanksPagePreview;
