import React from 'react';

import '../static/css/reset.css';
import '../static/css/typography.css';
import '../static/css/base.css';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="wrapper">
        {children}
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
};

export default Template;
