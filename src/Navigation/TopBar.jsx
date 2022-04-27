import React from 'react';
import logo from '../svg/logo.svg';

class TopBar extends React.Component {
    render() {
        return (
            <div className="top-navbar">
                <div className="personal-logo">
                    <abbr title="Kishor Ghising Logo"><img className="logo" src={logo} alt="Kishor Ghising Logo"/></abbr>
                    <h4 htmlFor="logo" className="title-name">Kishor Ghising</h4>
                </div>
                <a href="https://read.cv/kghising" target="_blank" className="download-cv">
                    <label htmlFor="download-icon">Resume</label>
                </a>
            </div>
        );
    }
} 

export default TopBar;
