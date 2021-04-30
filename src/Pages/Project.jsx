import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


import ThumbnailCard from '../Components/ThumbnailCard';

class Project extends React.Component {
  render() {
    return (
      <div className='project'>
        <div className="grid-container">
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" />
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Project);
