import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import "../styles/Button.css"

const ButtonRoute = (props) => {

  // simple Button component with generic eventHandler, ID, and Button Text.
  return (
    <span>
      <Link to={props.to} className={`btn btn-primary ${props.type}`}>
        <Button variant="primary">{props.text}</Button>
      </Link>
    </span>
  );
}

export default ButtonRoute
