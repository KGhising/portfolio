import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import image from '../Images/kishor-ghising.png';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="art-container">
          <div className="circle-name-container">
            <h1 className="kishor">Kishor</h1>
          </div>
          <img src={image} className="kg-image" alt="Photo of kishor ghising posing" />
          <div className="rectangle">
            <h1 className="ghising">Ghising</h1>
          </div>
        </div>
        <div className="content-container">
          <div className="content">
            <h4>
            I've been a designer for the past few years trying to help companies and people to build products that are inclusive, accessible, and usable.
            </h4>
            <p className="body3">
              Currently working at Prokura Innovations, my responsibility is to lead the UI/UX design with the accountability of conducting research, building a design system, and collaborating with engineers to improve product & user experience.
            </p>
            <p className="body3">
              I have been a huge supporter of eSport and I loved to play FPP games like cs:go, valorant, pubg 
              and list goes on. I’m also interested in football and hiking.
            </p>
            <p className="body3">
              I started my career as a software engineer intern and later discovered a passion for design. I began 
              learning design through books, articles, and different platforms like dribbble, behance & design 
              communities.
            </p>
            <a href="https://read.cv/kghising" target="_blank" className="download-cv">
                <label htmlFor="download-icon">Find resume here.</label>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  history: PropTypes.object,
};

export default withRouter(About);
