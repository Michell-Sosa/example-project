import React from "react"
import "../signup/signup.css"
import {Link} from "react-router-dom"


class Signup extends React.Component {

    render() {
      return (
        <React.Fragment>
            <div className="title">
            <h1 className= "text-center fw-bold mt-5"> Sign up! </h1>
            </div>
<div className="Infouser">
<form>
<div className="from-group mt-2">
  <label>
    Name: 
    <input type="text" name="name" />
  </label>
  </div>
  <div className="from-group mt-2">
  <label>
    Mail: 
    <input type="text" name="name" />
  </label>
  </div> 
  <div className="from-group mt-2">
  <label>
    Age: 
    <input type="text" name="age" />
  </label>
  </div> 
 
  <div className="from-group mt-2">
  <label>
    Gender: 
    <input type="text" name="gender" />
  </label>
  </div> 
   <div className="from-group mt-2">
  <label>
    Password: 
    <input type="text" name="password" />
  </label>
  <div className="button">
  <Link to="Error">
  <input type="submit" value="Submit"/>
  </Link>
  </div>
  </div> 
</form>
</div>
            </React.Fragment>
      );
    }
  }
    
export default Signup;