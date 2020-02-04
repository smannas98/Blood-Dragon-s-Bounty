import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css"

const Button = (props) => {

  // simple Button component with generic eventHandler, ID, and Button Text.
  return (
    <span>
      <Link to={props.to} className={`button ${props.type}`}>
        {props.text}
      </Link>
    </span>
  );
}

export default Button