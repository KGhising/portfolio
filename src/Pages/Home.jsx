import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { projects } from '../Constants/project';
import ThumbnailCard from '../Components/ThumbnailCard';
import { aboutMe } from '../Content/aboutMe';
import { shots } from '../Constants/shots';
import Blog from '../Pages/Blog';
import SocialLink from '../SocialLinks/SocialLink';
import ShotCard from '../Components/ShotCard';

class Project extends React.Component {
  render() {
    const projectArray = projects;
    const projectContainer = projectArray.map((project, index) => {
      return (
          <div className="cards-container" key={index}>
            <ThumbnailCard project={project} />
          </div>
    )});

    const shotsArray = shots;
    const shotsContainer = shotsArray.map((shot, index) => {
      return (
        <ShotCard shot = {shot} />
      )
    });

    return (
        <div className="home">
            <div className='about-hero'>
                <img className='kishor-image' src={aboutMe.Image} alt="Portait photo of kishor ghising" />
                <div className="about-me">
                    <h3>🖐</h3>
                    <h3>{aboutMe.heading}</h3>
                    <h4>{aboutMe.subHeading}</h4>
                    <p className="body3">{aboutMe.description}</p>
                </div>
            </div>
            <div className="shots-container">
              <h4>Shots.</h4>
              <div className="shots">{shotsContainer}</div>
            </div>
            <div className="project-container">
                <h4>Works.</h4>
                <div className='projects'>{projectContainer}</div>
            </div>
            <div className="blogs-container">
                <h4>Blogs.</h4>
                <Blog />
            </div>
            {/* <div className="about-container">
                <h4>About.</h4>
                <div className="text-container">
                  <p className="body2">{aboutMe.moreDescription1}</p><br />
                  <p className="body2">{aboutMe.moreDescription2}</p><br />
                  <p className="body2">{aboutMe.moreDescription3}</p>
                </div>
            </div> */}
            <footer className="contact-container">
                <h4>Contact.</h4>
                <SocialLink />
                <p body='body2 footer-content'>2021 | Kishor Ghising | kghisinga@gmail.com</p>
            </footer>
        </div>  
    );
  }
}

Project.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Project);
