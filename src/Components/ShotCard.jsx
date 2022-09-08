import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { SHOTS_DETAILS_URL } from '../Constants/appUrls';

class ShotCard extends React.Component{
    render() {
        const shot = this.props.shot;

        return(
            <React.Fragment>
                <Link 
                to={{
                    pathname: SHOTS_DETAILS_URL,
                    state: shot }}
                className="shot-link">
                    
                    <div className="image-container" style={{ backgroundImage: `url(${shot.shotImage})`}}>
                        <h5>{shot.title}</h5>
                    </div>
                </Link>
            </React.Fragment>
        );
    }
}

ShotCard.propTypes = {
    projectTitle: PropTypes.string,
    projectName: PropTypes.string,

};

export default withRouter(ShotCard);
