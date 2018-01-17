import React from 'react';
import './styles.css'

function LoginForm () {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Entered email: " + event.target.email.value);
        console.log("Entered password: " + event.target.password.value);          
    }

    return (
      <form className="loginform" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Please enter your email"/>
          <input type="password" name="password" placeholder="Please enter your password"/>
          <input type="submit" value="Submit!" />
      </form>
    )
}

export default LoginForm;