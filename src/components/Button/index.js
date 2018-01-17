import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

function Button ({children, type, disabled, isLoading}) {
    
    const handleClick = (event) => {
        console.log(event.target.textContent);
    }

    return (
    <button className={type} disabled={disabled} onClick={handleClick}>{isLoading ? "Loading..." : children}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool
}

Button.defaultProps = {
    type: "primary"
}

export default Button;