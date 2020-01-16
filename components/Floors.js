import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { floors } from "../constants/floors";
import { kitchens } from "../db/KitchenStore"
import "../styles/Floors.css"
import { Link, withRouter } from "react-router-dom";
import Button from "./Button";
import { Route } from "react-router-dom";

function Floors({ location }) {

  const [floor, setFloor] = useState(undefined);
  const floorMessages = [
    "Nothin&rsquo; here",
    "Some food here.",
    "So much food!"
  ]
  return (
    <section className="floor__nav">
      {floor && <div className="floor__indicator">??</div>}
      {floors.map(floorObject => (
        <div className="floor__box">
          <header className="floor__box__header">
            <h1 className="floor__box__indicator">
              <span className="floor__box__tag">floor</span>
              <span className="floor__box__number">{floorObject.floor}</span>
            </h1>
            <h2 className="floor__box__message">Nothin&rsquo; here.</h2>
          </header>
          <div className="floor__box__buttons">
            {
              kitchens.map((kitchenObject) => {
                if (kitchenObject.Floor === floorObject.floor) {
                  return (
                      <Button type="primary" text={kitchenObject.Name}></Button>
                  );
                }
              })
            }
          </div>
        </div>
      ))}
    </section>
  );
}

export default withRouter(Floors);
