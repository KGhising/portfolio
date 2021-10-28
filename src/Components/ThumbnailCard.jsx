import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { LATICRETE_URL } from '../Constants/appUrls';
import laticrete from '../Images/laticrete/laticreteThumbnail.png';

class ThumbnailCard extends React.Component{
    render() {
        const project = this.props.project;
        console.log(project.thumbnailPath);
        const style = {
            backgroundImage: `url(${project.thumbnailPath})`, 
        }
        return(
            <React.Fragment>
                <Link to={LATICRETE_URL} bgImage={this.props.project.designPath} className="card-link">
                    <div className="thumbnail-card laticrete" style={style}>
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
