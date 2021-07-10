import React from 'react';
import logo from '../svg/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

class TopBar extends React.Component {
    render() {
        return (
            <div className="top-navbar">
                <div className="personal-logo">
                    <img className="logo" src={logo} alt="Kishor Ghising Logo" />
                    <h4 htmlFor="logo" className="title-name">Kishor Ghising</h4>
                </div>
                <a href="#" className="download-cv">
                    <label htmlFor="download-icon" className="body3" >Resume</label>
                    <FontAwesomeIcon className="icon" icon={faArrowAltCircleDown} size="md" />  
                </a>
            </div>
        );
    }
} 

export default TopBar;