import React from 'react';
import logo from '../svg/logo.svg';
import downloadIcon from '../svg/downloadIcon.svg';

class TopBar extends React.Component {
    render() {
        return (
            <header className="top-navbar">
                <div className="personal-logo">
                    <img className="logo" src={logo} alt="Kishor Ghising Logo" />
                    <label htmlFor="logo" className="title-name">Kishor Ghising</label>
                </div>
                <div className="download-cv">
                    <label htmlFor="download-icon" >Download</label>
                    <img className="donwnload-icon" src={downloadIcon} alt="Kishor Ghising Resume Download icon" />
                </div>
            </header>
        );
    }
} 

export default TopBar;