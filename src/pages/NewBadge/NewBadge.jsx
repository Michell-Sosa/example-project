import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/badge"
import BadgeForm from "../../components/BadgeForm"
import "./NewBadge.css"

class NewBadge extends React.Component{

state = {
    loading : false,
    error: null,
    form:{
        header_pic: "",
        profile_picture: "",
        name: "",
        age: "",
        city: "",
        followers:"",
        likes: "",
        post: "",
    }
}

handleChange = event =>{
    this.setState({
    form:{
        ...this.state.form,
        [event.target.name]: event.target.value

    }
    })
}

handleSubmit = async(event) =>{
    event.preventDefault();
}

    render(){
        return(
        <React.Fragment>
            <Hero h={"15vh"}></Hero>
            <div className="container">
             <div className="row">
                <div className="col-6">
                <Badge
                header_pic = {this.state.form.header_picture || "https://i2.wp.com/www.noticieros.live/noticias/wp-content/uploads/2021/03/se-revelan-los-spoilers-del-capitulo-138-del-manga-de-shingeki-no-kyojin-1.jpg?resize=1221%2C527&ssl=1"}
                profile_picture = {this.state.form.profile_picture || "https://i.pinimg.com/originals/1e/25/4e/1e254e256307b5b9233e4970c1d3aaeb.jpg"}
                name = {this.state.form.name || "Mariel Aguirre"}
                age = {this.state.form.age || "21"}
                city = {this.state.form.age || "Tokyo, Japan"}
                followers = {this.state.form.followers || "0"}
                likes = {this.state.form.likes || "0"}
                post = {this.state.form.post || "0"}
                ></Badge>
                </div>
                <div className="col-6">
                <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                 formValues={this.state.form}>
                 </BadgeForm>
                </div>
              </div>
            </div>
        </React.Fragment>
        );
    }
}

export default NewBadge;