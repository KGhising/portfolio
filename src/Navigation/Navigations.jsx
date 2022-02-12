import React from 'react';

import NavLink from '../Components/NavLink';
import {
    PROJECT_URL,
    ABOUT_URL,
    CONTACT_URL,
} from '../Constants/appUrls';

class Navigations extends React.Component {
  render() {
    return (
        <React.Fragment>
            <div className="navbar">
              <NavLink url={PROJECT_URL}>Project</NavLink>
              <NavLink url={ABOUT_URL}>About</NavLink>
              <NavLink url={CONTACT_URL}>Contact</NavLink>
            </div>
        </React.Fragment>
    );
  }
}

export default Navigations;
