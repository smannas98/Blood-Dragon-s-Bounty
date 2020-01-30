import React from "react";
import "../styles/FloorMap.css";
import Button from "./Button";

export default function FloorMap(props) {
  const floorStyles = {
    width: "100%",
    textAlign: "center",
    height: "50%"
  };
  // Render out a button for each Kitchen with matching id and eventHandler passed down as prop from App.js
  return (
    <div style={floorStyles}>
      {props.kitchenList.map(kitchen => {
        return (
          <Button
            onclick={props.onKitchen}
            id={kitchen.id}
            text={kitchen.Name}
          />
        );
      })}
    </div>
  );
}
