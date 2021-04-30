import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

class SocialLink extends React.Component {
  render() {
    return (
        <div className="social-media-links">
            <a href="https://dribbble.com/kghisinga" target="_blank"><FontAwesomeIcon icon={faDribbble} size="lg" /></a> 
            <a href="https://www.behance.net/kghisinga" target="_blank"><FontAwesomeIcon icon={faBehance} size="lg" /></a> 
            <a href="https://www.linkedin.com/in/kghisinga/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a> 
            <a href="https://www.instagram.com/kghisinga/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a> 
            <a href="https://twitter.com/kghisinga" target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        </div>
    );
  }
}

export default SocialLink;
