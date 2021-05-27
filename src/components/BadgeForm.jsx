import React, {Component} from "react"
import "./style/BadgeForm.css"

class BadgeForm extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgeForm m-5">
                <from onSubmit={this.props.onSubmit}>
                    <div className="from-group mb-2">
                        <label className="mb-1">
                            Name
                        </label>
                        <input 
                        type="text" 
                        classame="from-control"
                        name="name"
                        onChange={this.props.onChange}
                        value={this.props.formValues.name}
                        />
                    </div>
                    <div className="from-group mb-2">
                        <label className="mb-1">
                            Profile Picture URL
                        </label>
                        <input 
                        type="text" 
                        className="from-control"
                        name="profile_picture"
                        onChange={this.props.onChange}
                        value={this.props.formValues.profile_picture}
                        />
                    </div>
                    <div className="from-group mb-2">
                        <label className="mb-1">
                        Badge Header URL
                        </label>
                        <input 
                        type="text" 
                        className="from-control"
                        name="header_pic"
                        onChange={this.props.onChange}
                        value={this.props.formValues.header_pic}
                        />
                    </div>
                    <div className="from-group mb-2">
                        <label className="mb-1">
                            Age
                        </label>
                        <input 
                        type="text" 
                        classame="from-control"
                        name="age"
                        onChange={this.props.onChange}
                        value={this.props.formValues.age}
                        />
                    </div>
                    <div className="from-group mb-2">
                        <label className="mb-1">
                            City
                        </label>
                        <input 
                        type="text" 
                        classame="from-control"
                        name="city"
                        onChange={this.props.onChange}
                        value={this.props.formValues.city}
                        />

                        <button type="submit" className="Submit__button">
                            Submit
                        </button>
                        </div>
                </from>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeForm;