import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.css'

function Notification ({children, type}) {

    return (
      <div className={type}>
        <span> {children} </span>
      </div>
    )
}

Notification.propTypes = {  
    type: PropTypes.string
}

Notification.defaultProps = {
    type: "info"   
}

export default Notification;
