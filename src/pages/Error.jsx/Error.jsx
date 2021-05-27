import React from "react"
import ErrorImage from "../../images/404.jpg"
import "./Error.css"

const Error = (props) => {
    return(
        <React.Fragment>
<div className="Error">
    <div className="Error__img" style={{height: props.h}}>
        <img src={props.picture} alt="Error" />


    </div>
</div>

        </React.Fragment>
    );
}
export default Error