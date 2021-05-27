import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/badge"
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
        city:"",
        followers:"",
        likes: "",
        post: "",
    }
}



    render(){
        return(
        <React.Fragment>
            <Hero h={"15vh"}></Hero>
            <div className="container">
                <div className="col">
                <Badge
                header_pic = {this.state.form.header_picture || "https://i2.wp.com/www.noticieros.live/noticias/wp-content/uploads/2021/03/se-revelan-los-spoilers-del-capitulo-138-del-manga-de-shingeki-no-kyojin-1.jpg?resize=1221%2C527&ssl=1"}
                profile_picture = {this.state.form.profile_picture || "https://i.pinimg.com/originals/1e/25/4e/1e254e256307b5b9233e4970c1d3aaeb.jpg"}
                ></Badge>
                </div>
                <div className="col">

                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default NewBadge;