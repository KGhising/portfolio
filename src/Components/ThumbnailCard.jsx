import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class ThumbnailCard extends React.Component{
    render() {
        const project = this.props.project;
        const bgUrl = {
            backgroundImage: `url(${project.thumbnailPath})`,
          };
        return(
            <React.Fragment>
                <Link to={project.detailpageUrl} className="card-link">
                    <div className="thumbnail-card" style={bgUrl}>
                        <div className="thumbnail-card-content">
                            <span><label>{project.name}</label>, {project.type}</span>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        );
    }
}

ThumbnailCard.propTypes = {
    projectTitle: PropTypes.string,
    projectName: PropTypes.string,

};

export default withRouter(ThumbnailCard);
