import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import emailjs from '@emailjs/browser';

import Button from '../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faInstagram, faLinkedinIn, faTwitter, faGithub, faEnvelope } from '@fortawesome/free-brands-svg-icons';

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
    <div className="contact-form-section">
      <h4 className="contact-heading">Feel free to leave a message.</h4>
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
  );
}

Contact.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Contact);
