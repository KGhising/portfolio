import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Themes/App.scss';
import Topbar from './Navigation/TopBar'
import {
  PROJECT_URL,
  ABOUT_URL,
  CONTACT_URL,
  RESUME_URL,
} from './Constants/appUrls';
import SideNavbar from './Navigation/Navigations'
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="top-navbar-container">
            <Topbar />
          </div>

          <section className="main-section">
            <nav className='side-navbar'>
              <SideNavbar />
              <div className="social-media-links">
                  <a href="https://dribbble.com/kghisinga" target="_blank"><FontAwesomeIcon icon={faDribbble} size="lg" /></a> 
                  <a href="https://www.behance.net/kghisinga" target="_blank"><FontAwesomeIcon icon={faBehance} size="lg" /></a> 
                  <a href="https://www.linkedin.com/in/kghisinga/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a> 
                  <a href="https://www.instagram.com/kghisinga/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a> 
                  <a href="https://twitter.com/kghisinga" target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
              </div>
            </nav>
            <div className="sort-info">
              <p>Hi, I'm a UI/UX designer<br />based on Kathmandu, Nepal.</p>
              <div className="underline"></div>
            </div>
            <main className="sidebar">
              <Switch>
                <Route exact path={PROJECT_URL}>
                  <Project></Project>
                </Route>
                <Route exact path={ABOUT_URL}>
                  <About></About>
                </Route>

                <Route exact path={CONTACT_URL}>
                  <Contact></Contact>
                </Route>

                <Route exact path={RESUME_URL}>
                  <Resume></Resume>
                </Route>
              </Switch>
            </main>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
