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

  const style = {
    backgroundImage: `url(${laticreteDesign})`,
  }
  return (
    <section>
      <a onClick={handleClick} className="back-button">
        <FontAwesomeIcon className="left-icon" icon={faArrowAltCircleLeft} size="md" />
        <label htmlFor="back-icon">Back</label>
      </a>
      <div className='project-details' style={style}>
      </div>
    </section>
  );
}

ProjectDetails.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ProjectDetails);
