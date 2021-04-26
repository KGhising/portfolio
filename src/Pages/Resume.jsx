import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Resume extends React.Component {
  render() {
    return (
      <div className='resume'>
        <h1>Resume</h1>
      </div>
    );
  }
}

Resume.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Resume);
