import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { mirasImages } from '../Constants/mirasImage';

const ProjectDetails = () =>   {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  const imageArray = mirasImages;
  const imageContainer = imageArray.map((image, index) => {
    return (
      <img className='design-img' src={image.imagePath} alt={image.altText} key={index} />
    )});

  return (
    <section>
      <div className="back-button-container">
        <a onClick={handleClick} className="back-button">
          <FontAwesomeIcon className="left-icon" icon={faArrowAltCircleLeft} size="md" />
          <label htmlFor="back-icon">Back</label>
        </a>
      </div>
      <div className='project-details'>
        {imageContainer}
      </div>
    </section>
  );
}

ProjectDetails.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ProjectDetails);
