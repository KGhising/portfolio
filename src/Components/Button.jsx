import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';

class Button extends React.Component{
    render() {
        return(
            <button className="button body3">
                {this.props.name} 
                <FontAwesomeIcon className='buttonIcon' icon={faPaperPlane} size="md" />
            </button>
        );
    }
}

Button.propTypes = {
    name: PropTypes.string,
};

export default Button;
