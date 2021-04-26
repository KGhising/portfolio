import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <h1>About</h1>
      </div>
    );
  }
}

About.propTypes = {
  history: PropTypes.object,
};

export default withRouter(About);
