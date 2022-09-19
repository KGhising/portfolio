import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faInstagram, faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

class SocialLink extends React.Component {
  render() {
    return (
        <div className="social-media-links">
            <a href="https://www.linkedin.com/in/kghisinga/" target="_blank"><div className='body3'>Linkedin</div></a>
            <a href="https://www.behance.net/kghisinga" target="_blank"><div className='body3'>Behance</div></a>
            <a href="https://dribbble.com/kghisinga" target="_blank"><div className='body3'>Dribbble</div></a>
            <a href="https://github.com/KGhising" target="_blank"><div className='body3'>Github</div></a>
            <a href="https://www.instagram.com/kghisinga/" target="_blank"><div className='body3'>Instagram</div></a> 
            <a href="https://twitter.com/kghisinga" target="_blank"><div className='body3'>Twitter</div></a> 
        </div>
    );
  }
}

export default SocialLink;
