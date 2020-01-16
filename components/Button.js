import React from "react";
import "../styles/Button.css"

export default function Button(props) {

  // simple Button component with generic eventHandler, ID, and Button Text.
  return (
    <span>
      <button
        className={`button ${props.type}`}
        onClick={props.onclick}
        id={props.id}
      >
        {props.currentValue ? (
          `${props.text}${" "}${props.currentValue}`
        ) : (
          <strong>{props.text}</strong>
        )}
      </button>
    </span>
  );
}
