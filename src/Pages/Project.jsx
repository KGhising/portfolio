import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { projects } from '../Constants/images';
import ThumbnailCard from '../Components/ThumbnailCard';
import laticreteThumbnail from '../Images/laticrete/laticreteThumbnail.png';
import craftlalitapurThumbnail from '../Images/craftlalitapur/craftlalitapurThumbnail.png';
import gundrookThumbnail from '../Images/gundrook/gundrookThumbnail.png';
import cropprotechnepalThumbnail from '../Images/cropprotechnepal/cropprotechnepalThumbnail.png';

import laticreteDesign from '../Images/laticrete/laticreteDesign.png';

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
