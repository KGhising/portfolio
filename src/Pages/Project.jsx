import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


import ThumbnailCard from '../Components/ThumbnailCard';

class Project extends React.Component {
  render() {
    return (
      <section className='projects' >
        <div className="sort-info">
          <p>Hi, I'm a UI/UX designer<br />based on Kathmandu, Nepal.</p>
        </div>
        <div className="grid-container">
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
          <ThumbnailCard projectTitle="This is title" projectField="UX" projectName="projectName" />
        </div>
      </section>
    );
  }
}

Project.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Project);
