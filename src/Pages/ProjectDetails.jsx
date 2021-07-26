import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ProjectDetails extends React.Component {
  render() {
    return (
      <div className='project-details'>
        {/* <img src="../Images//laticrete/Laticrete-design.png" alt="laticrete project" /> */}
      </div>
    );
  }
}

ProjectDetails.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ProjectDetails);
