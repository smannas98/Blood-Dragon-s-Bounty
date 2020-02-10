import React from "react";

//Dependencies
import { Link, withRouter } from "react-router-dom";

//Components
import Button from "../components/Button";

//Styles
import "../styles/MyKitchen.css";

const getGreetingMessage = () => {
  let str = [
    "Select a kitchen below to discover the bounty within.",
    "Hungry? Well you must be if you made it this far.",
    "Free food: the most important meal of the day.",
    "There's always money in the banana stand, but rarely free food.",
    "It's either this or spend twenty minutes walking around the office scavenging.",
    "Welcome to Office Eats. Now stop reading and start eating.",
    "Office Eats: It updates periodically so you don't have to.",
    "The Blood Dragon's bounty awaits."
  ];
  let rand = Math.floor(Math.random() * Math.floor(str.length))
  return str[rand]
}

const MyKitchen = () => {
  return (
    <section className="mykitchen__section">
      <div className="mykitchen__bg"></div>
      <div className="mykitchen__section__inner container">
        {/* <header>
          <h1 className="display-header-2">Hello</h1>
          <p className="display-header-1">Tree Top</p>
          <p>Last Updated: </p>
          <Food></Food>
        </header> */}
        <p className="display-4">{getGreetingMessage()}</p>
      </div>
    </section>
  );
}

export default withRouter(MyKitchen);