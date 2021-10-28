import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import {
  PROJECT_URL
} from '../Constants/appUrls';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

import laticreteDesign from '../Images/laticrete/laticreteDesign.png';

class ProjectDetails extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${laticreteDesign})`,
    }
    return (
      <section>
        <a href={PROJECT_URL} className="back-button">
          <FontAwesomeIcon className="left-icon" icon={faArrowAltCircleLeft} size="md" />
          <label htmlFor="back-icon">Back</label>
        </a>
        <div className='project-details' style={style}>
        </div>
      </section>
    );
  }
}

ProjectDetails.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ProjectDetails);
