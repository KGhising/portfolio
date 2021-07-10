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
              <NavLink url={PROJECT_URL} className="body3">Project</NavLink>
              <NavLink url={ABOUT_URL} className="body3">About</NavLink>
              <NavLink url={CONTACT_URL} className="body3">Contact</NavLink>
            </div>
        </React.Fragment>
    );
  }
}

export default Navigations;
