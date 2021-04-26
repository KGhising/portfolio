import React from 'react';

import NavLink from '../Components/NavLink';
import {
    PROJECT_URL,
    ABOUT_URL,
    CONTACT_URL,
    RESUME_URL,
} from '../Constants/appUrls';

class Navigations extends React.Component {
  render() {
    return (
        <React.Fragment>
            <NavLink url={PROJECT_URL}>Project</NavLink>
            <NavLink url={ABOUT_URL}>About</NavLink>
            <NavLink url={CONTACT_URL}>Contact</NavLink>
            <NavLink url={RESUME_URL}>Resume</NavLink>
        </React.Fragment>
    );
  }
}

export default Navigations;
