import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { projects } from '../Constants/project';
import ThumbnailCard from '../Components/ThumbnailCard';

class Project extends React.Component {
  render() {
    const projectArray = projects;
    const projectContainer = projectArray.map((project, index) => {
      return (
          <div className="grid-container" key={index}>
            <ThumbnailCard project={project} />
          </div>
      )});
    return (
      <div className='projects' >
        {projectContainer}
      </div>
    );
  }
}

Project.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Project);
