import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ProjectDetails extends React.Component {
  render() {
    return (
      <div className='project-details'>
        <h1>Project Details</h1>
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ProjectDetails);
