import React, { useEffect } from "react";
import "../styles/InfoBox.css";
import Button from "./Button";

export default function InfoBox({ isminified, local, setLocal }) {
  // imported state from App.js
  const handleFoodChange = e => {
    // loop through key/value pairs in food object. Return Food Item associated with button and assign opposite value to it.
    const foodKey = e.target.id;
    const newKitchen = { ...local };
    newKitchen.food[foodKey] = !newKitchen.food[foodKey];
    setLocal(newKitchen);
    console.log(newKitchen);
  };

  return (
    // if state from App.js is set to true, add class of isMinified to infobox. else, add isFull
    <div className={isminified ? "info isMinified" : "info isFull"}>
      <div>
        {local ? ( // If there is a kitchen object referenced, render out corresponding data
          <ul>
            <li>{local.Name}</li>
            <li>{local.Floor}</li>
            <li>
              {Object.keys(local.food).map(key => {
                // loop through key/value pairs of food object. Render out a button with matching text/id for each food item.
                console.log(key);
                return (
                  <Button
                    currentValue={local.food[key]}
                    text={key}
                    id={key}
                    onclick={handleFoodChange}
                  />
                );
              })}
            </li>
          </ul>
        ) : (
          <p>local</p>
        )}
      </div>
    </div>
  );
}
