import React from 'react';

import NavLink from '../Components/NavLink';
import {
    PROJECT_URL,
    ABOUT_URL,
    CONTACT_URL,
    BLOG_URL,
} from '../Constants/appUrls';

class Navigations extends React.Component {
  render() {
    return (
        <React.Fragment>
            <div className="navbar">
              <NavLink url={PROJECT_URL}>Projects</NavLink>
              <NavLink url={ABOUT_URL}>About</NavLink>
              <NavLink url={CONTACT_URL}>Contact</NavLink>
              <NavLink url={BLOG_URL}>Blogs<sup className='sup'>New</sup></NavLink>
            </div>
        </React.Fragment>
    );
  }
}

export default Navigations;
