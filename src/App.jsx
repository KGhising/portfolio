import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './Themes/App.scss';
import Topbar from './Navigation/TopBar'
import {
  PROJECT_URL,
  ABOUT_URL,
  CONTACT_URL,
  PROJECT_DETAILS_URL,
} from './Constants/appUrls';
import BottomBar from './Navigation/BottomBar';
import Navigations from './Navigation/Navigations'
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProjectDetails from './Pages/ProjectDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="top-navbar-container">
            <Topbar />
            <nav className="navbar-container">
              <Navigations />
            </nav>
          </header>
          <section className="main-section">
            <main className="main-container">
              <Switch>
                <Route exact path="/">
                  <Project></Project>
                </Route>
                <Route exact path={PROJECT_URL}>
                  <Project></Project>
                </Route>
                <Route exact path={ABOUT_URL}>
                  <About></About>
                </Route>
                <Route exact path={CONTACT_URL}>
                  <Contact></Contact>
                </Route>
                <Route exact path={PROJECT_DETAILS_URL}>
                  <ProjectDetails></ProjectDetails>
                </Route>
              </Switch>
            </main>
          </section>
          <footer className="bottom-bar-container">
            <BottomBar />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
