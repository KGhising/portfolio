import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <h1>Contact</h1>
      </div>
    );
  }
}

Contact.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Contact);
