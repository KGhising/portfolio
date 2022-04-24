import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

import laticreteDesign from '../Images/laticrete/laticreteDesign.png';

const ProjectDetails = () =>   {
  const history = useHistory();

  function handleClick() {
    history.push("/projects");
  }

  return (
    <section>
      <div className="back-button-container">
        <a onClick={handleClick} className="back-button">
          <FontAwesomeIcon className="left-icon" icon={faArrowAltCircleLeft} size="md" />
          <label htmlFor="back-icon">Back</label>
        </a>
      </div>
      <div className='project-details'>
        <img className='design-img' src={laticreteDesign} alt='laticrete design' />
      </div>
    </section>
  );
}

ProjectDetails.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ProjectDetails);
