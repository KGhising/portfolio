import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './Themes/App.scss';
import Topbar from './Navigation/TopBar'
import {
  PROJECT_URL,
  ABOUT_URL,
  CONTACT_URL,
  BLOG_URL,
  PIONEER_URL,
  MIRASACADEMY_URL,
  CHASMAGHAR_URL,
  WWF_URL,
  WATCHTIME_URL,
} from './Constants/appUrls';
import BottomBar from './Navigation/BottomBar';
import Navigations from './Navigation/Navigations'
import Projects from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Pioneer from './projectPages/Pioneeer';
import Miras from './projectPages/Miras';
import Chasmaghar from './projectPages/Chasmaghar';
import Wwf from './projectPages/Wwf';
import Watchtime from './projectPages/Watchtime';

class App extends React.Component {
  render() {
    return (
      <Router>
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
                  <Projects></Projects>
                </Route>
                <Route path={ABOUT_URL}>
                  <About></About>
                </Route>
                <Route path={CONTACT_URL}>
                  <Contact></Contact>
                </Route>
                <Route path={BLOG_URL}>
                  <Blog></Blog>
                </Route>
                <Route path={PIONEER_URL}>
                  <Pioneer></Pioneer>
                </Route>
                <Route path={MIRASACADEMY_URL}>
                  <Miras></Miras>
                </Route>
                <Route path={CHASMAGHAR_URL}>
                  <Chasmaghar></Chasmaghar>
                </Route>
                <Route path={WWF_URL}>
                  <Wwf></Wwf>
                </Route>
                <Route path={WATCHTIME_URL}>
                  <Watchtime></Watchtime>
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
