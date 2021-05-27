import React from "react"
import "../login/login.css"
import {Link} from "react-router-dom"


class Login extends React.Component {

    render() {
      return (
        <React.Fragment>
            <div className="title">

            <h1 className= "text-center fw-bold mt-5"> You already have an account? Login </h1>
            </div>

            <div className="user">
<form>
<div className="from-group mt-2">
  <label>
    Name: 
    <input type="text" name="name" />
  </label>
  </div>
  <div className="from-group mt-2">
  <label>
    Password: 
    <input type="text" name="name" />
  </label>
  </div> 
  <div className="button">
  <Link to="Error">
  <input type="submit" value="Login"/>
  </Link>
  </div>
</form>
</div>

        </React.Fragment>
      );
    }
  }
    
export default Login;