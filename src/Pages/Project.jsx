import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Project extends React.Component {
  render() {
    return (
      <div className='project'>
        <h1>Project</h1>
      </div>
    );
  }
}

Project.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Project);
