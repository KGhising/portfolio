import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './Themes/App.scss';
import Topbar from './Navigation/TopBar'
import {
  PROJECT_URL,
  ABOUT_URL,
  CONTACT_URL,
  LATICRETE_URL,
  PIONEER_URL,
} from './Constants/appUrls';
import BottomBar from './Navigation/BottomBar';
import Navigations from './Navigation/Navigations'
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LaticreteDesign from './projectPages/LaticreteDesign';
import PioneerDesign from './projectPages/LaticreteDesign';

class App extends React.Component {
  render() {
    return (
      <Router basename='/portfolio'>
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
                <Route exact path={PROJECT_URL}>
                  <Project></Project>
                </Route>
                <Route path={ABOUT_URL}>
                  <About></About>
                </Route>
                <Route path={CONTACT_URL}>
                  <Contact></Contact>
                </Route>
                <Route path={LATICRETE_URL}>
                  <LaticreteDesign></LaticreteDesign>
                </Route>
                <Route path={PIONEER_URL}>
                  <LaticreteDesign></LaticreteDesign>
                </Route>
                <Route path="/" render={()=> <Redirect to={PROJECT_URL}/>}>
                </Route>
              </Switch>
            </main>
          </section>
          <footer className="bottom-bar-container">
            <BottomBar />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
