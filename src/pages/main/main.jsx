import React from "react"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"
import "./main.css"

const Main = (props) => {
    return(
        <React.Fragment>
    <div className="Main">
    <div className="Main__content">
        <h1 className="Main__title">{props.title || "Welcome"} </h1>
        <Button contentText={"Lets start"} link={"/new"}></Button>
    </div>
    <div className="Hero__adjust">
    <Hero h={"88vh"} picture={"https://c.wallhere.com/photos/0c/b7/wild_animal_zoo_stockholm_snake_rattlesnake_breathtaking_orm-896941.jpg!d"}></Hero>
</div>
</div>
        </React.Fragment>
    )
}

export default Main;