import React, { useState, useEffect } from "react";
import FloorMap from "./components/FloorMap";
import InfoBox from "./components/InfoBox";
import kitchenList from "./assets/kitchens";
import "./styles/nav.css";
import "./styles/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import { floors } from "./constants/floors";



 function App() {
  const [isminified, setMinified] = useState(true); // initialize state to handle class changes on infobox (simple true/false check!)
  const [kitchens, setKitchens] = useState(undefined); // set state for kitchen stores
  const [kitchen, setKitchen] = useState(); // local state for infoBox
  const [floor, setFloor] = useState(undefined);

  const appStyles = {
    border: "solid",
    width: "75%",
    margin: "auto",
    height: "calc(100% - 150px)"
  };

  const handleKitchenClick = e => {
    setMinified(!isminified); // set's isminified state to opposite value, used for CSS styling.
    const currentKitchen = kitchens.filter(
      // filter through the kitchen array until kitchen with corresponding ID is found.
      _kitchen => _kitchen.id == e.target.id
    );
    console.log(e.target.id);
    console.log(currentKitchen);
    setKitchen(currentKitchen[0]); // set kitchen state to filtered kitchen.
  };

  function renderFloorIndicator() {
    if (floor === 1) {
      return "1st Floor";
    }
    if (floor === 3) {
      return "3rd Floor";
    }
    if (floor === 4) {
      return "4th Floor";
    }
  }

  useEffect(() => {
    setKitchens(
      kitchenList.filter(kitchenObject => kitchenObject.Floor === floor)
    );
  }, [floor]);

  return (
    <Router>
      <div style={appStyles}>
        {kitchens && (
          <FloorMap onKitchen={handleKitchenClick} kitchenList={kitchens} />
        )}
        <InfoBox
          isminified={isminified}
          local={kitchen}
          setLocal={setKitchen}
        />
        {/* pass down isminified state as a prop for infobox */}
        <Nav />
        <Route exact path="/">
          <div className="floor__nav">
            {floor && (
              <div className="floor__indicator">{renderFloorIndicator()}</div>
            )}
            {floors.map(floorObject => (
              <button
                className={
                  floor === floorObject.floor
                    ? "floor__button floor__button--active"
                    : "floor__button"
                }
                onClick={() => setFloor(floorObject.floor)}
              >
                {floorObject.name}
              </button>
            ))}
          </div>
        </Route>
        <Route path="/alerts">alerts</Route>
        <Route path="/stats">stats</Route>
        <Route path="/profile">profile</Route>
      </div>
    </Router>
  );
 }

export default App;
