import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { PROJECT_DETAILS_URL } from '../Constants/appUrls';

class ThumbnailCard extends React.Component{
    render() {
        return(
            <Link to={PROJECT_DETAILS_URL + this.props.projectName}>
                <div className="thumbnail-card">
                    <div className="card-content">
                        <h3 className="project-title">{this.props.projectTitle}</h3>
                        <h4 className="project-field">{this.props.projectField}</h4>
                    </div>
                </div>
            </Link>
        );
    }
}

ThumbnailCard.propTypes = {
    projectTitle: PropTypes.string,
    projectName: PropTypes.string,

};

export default withRouter(ThumbnailCard);
