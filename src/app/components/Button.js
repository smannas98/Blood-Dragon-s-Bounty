import React from "react";

export default function Button(props) {
  const buttonStyles = {
    width: "45%",
    display: "inline-block",
    margin: "10px"
  };
  // simple Button component with generic eventHandler, ID, and Button Text.
  return (
    <span>
      <button
        className="button is-primary"
        style={buttonStyles}
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
