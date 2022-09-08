import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, useHistory, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

const Shotpage = (props) =>   {
  const history = useHistory();
  const location = useLocation()

  const {shotImage, title} = props.location.state;

  function handleClick() {
    history.push("/home");
  }
  return (
    <section className='shot-page'>
      <div className="close-container">
        <h4>{title}</h4>
        <a onClick={handleClick} className="back-button">
          <FontAwesomeIcon className="left-icon" icon={faWindowClose} size="md" />
          <label htmlFor="back-icon">Close</label>
        </a>
      </div>
      <img src={shotImage} />
    </section>
  );
}

Shotpage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Shotpage);
