import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component{
    render() {
        return(
            <input
                className="input-field body2"
                type={this.props.type} 
                name={this.props.name} 
                placeholder={this.props.placeholder} 
                id={this.props.id}
            />
        );
    }
}

InputField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
};

export default InputField;
