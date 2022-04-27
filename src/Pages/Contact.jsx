import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import emailjs from '@emailjs/browser';

import Button from '../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faInstagram, faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_afn11co', 'template_fk007kh', form.current, 'mXmlAy6xY81FDwnDG')
      .then(() => {
        alert('Email sent successfully!');
      }, () => {
        alert('Email failed to send!');
      });

      e.target.reset();
  };

  return (
    <div className='contact'>
      <div className="social-link">
        <h4 className="contact-heading">Find me on.</h4>
        <div className="social-link-container">
          <div className="dribbble icon-name-container">
            <div className="icon-container">
              <a href="https://dribbble.com/kghisinga" target="_blank"><FontAwesomeIcon className="icon" icon={faDribbble} size="2x" /></a>
            </div>
            <h6>Dribbble</h6>
          </div>
          <div className="hehance icon-name-container">
            <div className="icon-container">
              <a href="https://www.behance.net/kghisinga" target="_blank"><FontAwesomeIcon className="icon" icon={faBehance} size="2x" /></a>
            </div>
            <h6>Behance</h6>
          </div>
          <div className="linkedin icon-name-container">
            <div className="icon-container">
              <a href="https://dribbble.com/kghisinga" target="_blank"><FontAwesomeIcon className="icon" icon={faLinkedinIn} size="2x" /></a>
            </div>
            <h6>Linkedin</h6>
          </div>
          <div className="instagram icon-name-container">
            <div className="icon-container">
              <a href="https://www.instagram.com/kghisinga/" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} size="2x" /></a>
            </div>
            <h6>Instagram</h6>
          </div>
          <div className="twitter icon-name-container">
            <div className="icon-container">
              <a href="https://twitter.com/kghisinga" target="_blank"><FontAwesomeIcon className="icon" icon={faTwitter} size="2x" /></a>
            </div>
            <h6>Twitter</h6>
          </div>
          <div className="github icon-name-container">
            <div className="icon-container">
              <a href="https://github.com/KGhising" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} size="2x" /></a>
            </div>
            <h6>Github</h6>
          </div>
        </div>
      </div>
      <div className="form-section">
        <h4 className="contact-heading form-heading">Feel free to leave a message.</h4>
          <form ref={form} onSubmit={sendEmail} method="post" className="form">
            <div className="email-container">
              <label htmlFor="email" className="label">Email</label><br/>
              <input className="input-field body2" type="email" name="email" id="email" placeholder="Email" required /><br/>
            </div>
            <div className="message-container">
              <label htmlFor="email" className="label">Message</label><br/>
              <textarea className="text-area body2" name="message" placeholder="Your message" id="message" required ></textarea><br/>
            </div>
            <div className="button-container">
              <Button name="Send Your Message"/>
            </div>
          </form>
      </div>
    </div>
  );
}

Contact.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Contact);
