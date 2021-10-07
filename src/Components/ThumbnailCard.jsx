import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import { PROJECT_DETAILS_URL } from '../Constants/appUrls';

class ThumbnailCard extends React.Component{
    render() {
        const style = {
            backgroundImage: `url(${this.props.thumbnail})`,
        }
        return(
            <React.Fragment>
                <Link to={PROJECT_DETAILS_URL} className="card-link">
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
