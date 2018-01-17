import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

function Form ({config}) {  

    let formItems = config.map((item)=>{
        if (item.type === "checkbox") {
            return (
                <div key={item.name} className="checkbox-row">
                    <input type={item.type} name={item.name} id={item.name} />
                    <label htmlFor={item.name}> {item.label} </label>
                </div>
            )
        } else {
            return (
                <input key={item.name} type={item.type} name={item.name} placeholder={item.placeholder} />
            )
        }
    })

    return (
     <form className="formComponent">
         {formItems}
     </form>
    )
}

Form.propTypes = {
    config: PropTypes.arrayOf(PropTypes.object).isRequired    
}


export default Form;