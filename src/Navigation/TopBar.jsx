import React from 'react';
import{ Link, withRouter } from 'react-router-dom';

import Button from '../Components/Button';
// import Navigations from '../Navigation/Navigations  ';
import {
    CONTACT_URL,
    HOME_URL,
} from '../Constants/appUrls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class TopBar extends React.Component {
    render() {
        return (
            <div className="top-navbar">
                <Link to={HOME_URL} className='logo-link'>
                    <div className="personal-logo">
                        <abbr title="Kishor Ghising Logo">
                            <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 48.276 60">
                                <path id="logo" d="M74.566,70.65l25,35H51.29v-60H99.566Zm-2.241,2.241L54.48,90.736V102.46H93.448Z" transform="translate(-51.29 -45.65)" fill=""/>
                            </svg>
                        </abbr>
                        <h4 htmlFor="logo" className="title-name">Kishor Ghising</h4>
                    </div>
                </Link>
                <div className="action-container">
                    <a href="https://read.cv/kghising" target="_blank" className="download-cv body2">
                        Resume
                    </a>
                    {/* <nav className="navbar-container">
                        <Navigations />
                    </nav> */}
                    <Link to={CONTACT_URL} className='button-link'>
                        Send email<FontAwesomeIcon className='buttonIcon' icon={faEnvelope} size="md" />
                    </Link>
                </div>
            </div>
        );
    }
} 

export default withRouter(TopBar);
