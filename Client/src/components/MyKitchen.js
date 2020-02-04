import React, { useState, useEffect } from "react";

//Dependencies
import { Link, withRouter } from "react-router-dom";

//Components
import Button from "../components/Button";
import Food from "../components/Food";

//Styles
import "../styles/MyKitchen.css";

function MyKitchen() {
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
        <p className="display-4">Select a kitchen below to discover delicious untold bounty.</p>
      </div>
    </section>
  );
}

export default withRouter(MyKitchen);