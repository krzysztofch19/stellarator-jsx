import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.css'

function Input ({type, name, placeholder, label, value, size, error}) {

    const handleInput  = (event) => {
        console.log(event.target.value);
    }

    if(type === "textarea"){
        return (
            <div className="inputRow">
                {label ? <label htmlFor={name}> {label} </label> : null}  
                <textarea name={name}
                          id={label ? name : null}
                          placeholder={placeholder}
                          value={value} 
                          className={size} 
                          onChange={handleInput} />
                {error ? <span className="error"> {error} </span> : null}   
            </div>
        )
    } else {
        return (
            <div className="inputRow">
                {label ? <label htmlFor={name}> {label} </label> : null}  
                <input type={type} 
                       name={name}
                       id={label ? name : null}
                       placeholder={placeholder}
                       value={value}                                
                       className={size}  
                       onChange={handleInput} />
                {error ? <span className="error"> {error} </span> : null}                     
            </div>
           )
    }   
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	size: PropTypes.string,
	error: PropTypes.string
}

Input.defaultProps = {
    type: "text",
    size: "medium"
}

export default Input;
