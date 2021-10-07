import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


import ThumbnailCard from '../Components/ThumbnailCard';
import laticreteThumbnail from '../Images/laticrete/laticreteThumbnail.png';
import craftlalitapurThumbnail from '../Images/craftlalitapur/craftlalitapurThumbnail.png';
import gundrookThumbnail from '../Images/gundrook/gundrookThumbnail.png';
import cropprotechnepalThumbnail from '../Images/cropprotechnepal/cropprotechnepalThumbnail.png';

class Project extends React.Component {
  render() {
    return (
      <div className='projects' >
        <div className="grid-container">
          <ThumbnailCard thumbnail={laticreteThumbnail} />
          <ThumbnailCard thumbnail={craftlalitapurThumbnail} />
          <ThumbnailCard thumbnail={gundrookThumbnail} />
          <ThumbnailCard thumbnail={cropprotechnepalThumbnail} />
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Project);
