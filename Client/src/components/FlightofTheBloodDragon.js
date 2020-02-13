import React from "react";

//Dependencies
import { Modal, Button } from "react-bootstrap";
import { ReactSVG } from "react-svg";

//Static
import BloodDragon from "../static/blooddragon.svg"

//Styles
import '../styles/BloodDragon.css'


const FlightofTheBloodDragon = props => {
    console.log('the blood dragon flies at midnight')
  return (
    <figure className="blood-dragon">
      <ReactSVG src={BloodDragon} />
    </figure>
  );
};

export default FlightofTheBloodDragon;