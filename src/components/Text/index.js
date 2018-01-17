import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.css'

function Text ({children, heading, size}) {

    return (
      <React.Fragment>
        {heading ? <h1> {children} </h1> : <p className={size}>{children}</p>}        
      </React.Fragment>
    )
}

Text.propTypes = {
    heading: PropTypes.bool,
    size: PropTypes.string
}

Text.defaultProps = {
    heading: false,
    size: "medium"
}

export default Text;