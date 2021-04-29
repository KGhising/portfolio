import React from 'react';
import PropTypes from 'prop-types';

class ThumbnailCard extends React.Component{
    render() {
        return(
            <div className="thumbnail-card">
                <div className="card-content">
                    <h3 className="project-title">{this.props.projectTitle}</h3>
                    <h4 className="project-field">{this.props.projectField}</h4>
                </div>
            </div>
        );
    }
}

ThumbnailCard.propTypes = {
    title: PropTypes.string,
};

export default ThumbnailCard;
