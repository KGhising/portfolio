import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from '../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faInstagram, faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <h3 className="contact-heading">Find me on.</h3>
        <div className="social-link-container">
          <div className="dribbble icon-name-container">
            <div className="icon-container">
              <a href="https://dribbble.com/kghisinga" target="_blank"><FontAwesomeIcon className="icon" icon={faDribbble} size="3x" /></a>
            </div>
            <h5>Dribbble</h5>
          </div>
          <div className="hehance icon-name-container">
            <div className="icon-container">
              <a href="https://www.behance.net/kghisinga" target="_blank"><FontAwesomeIcon className="icon" icon={faBehance} size="3x" /></a>
            </div>
            <h5>Behance</h5>
          </div>
          <div className="linkedin icon-name-container">
            <div className="icon-container">
              <a href="https://dribbble.com/kghisinga" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} size="3x" /></a>
            </div>
            <h5>Linkedin</h5>
          </div>
          <div className="instagram icon-name-container">
            <div className="icon-container">
              <a href="https://www.instagram.com/kghisinga/" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} size="3x" /></a>
            </div>
            <h5>Instagram</h5>
          </div>
          <div className="twitter icon-name-container">
            <div className="icon-container">
              <a href="https://twitter.com/kghisinga" target="_blank"><FontAwesomeIcon className="icon" icon={faTwitter} size="3x" /></a>
            </div>
            <h5>Twitter</h5>
          </div>
          <div className="github icon-name-container">
            <div className="icon-container">
              <a href="https://github.com/KGhising" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} size="3x" /></a>
            </div>
            <h5>Github</h5>
          </div>
        </div>
        
      <div className="form-section">
          <h3 className="contact-heading form-heading">Feel free to leave a message.</h3>
          <div className="form-container">
            <form action="#" method="post" autocomplete="on" className="form">
              <div className="email-container">
                <label htmlFor="email" className="label">Email</label><br/>
                <input className="input-field body2" type="email" name="email" id="email" placeholder="Email" /><br/>
              </div>
              <div className="message-container">
                <label htmlFor="email" className="label">Email</label><br/>
                <textarea className="text-area body2" name="message" placeholder="Message" id="message"></textarea><br/>
              </div>
              <div className="button-container">
                <Button name="Send Your Message"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Contact);
