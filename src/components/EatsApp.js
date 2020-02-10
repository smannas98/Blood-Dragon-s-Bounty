import React, { useState, useEffect } from "react";

//Dependencies
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useParams,
  Redirect
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";

//Components
import FloorView from "./FloorView";
import KitchenView from "./KitchenView";
import Header from "./Header";

//Styles
import "../styles/transitions.css";

export const convertKitchenToSlug = strKitchen => {
  return strKitchen
    .toLowerCase()
    .replace(" ", "")
    .replace("kitchen", "")
    .trim();
};

const EatsApp = () => {
  const [eats, setEats] = useState();
  // const [lastUpdated, setLastUpdated] = useState();
  let location = useLocation();

  async function fetchData() {
    let dataResponse = await axios("/api");
    return setEats(dataResponse.data);
  }

  let allFloors = eats && {};
  if (eats) {
    let pair = {};
    eats.kitchens.forEach((kitchen, i) => {
      let pair = { [i]: kitchen.floor };
      if (Object.values(allFloors).indexOf(kitchen.floor) === -1) {
        return (allFloors = { ...allFloors, ...pair });
      }
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header refresh={() => fetchData} />
      <Switch location={location}>
        <Route exact path="/kitchen">
          <Redirect to="/" />
        </Route>
        <Route path="/kitchen/:id">
          {eats && <KitchenView id=":id" eats={eats} />}
        </Route>
        <Route path="/">{<FloorView eats={eats} floors={allFloors} />}</Route>
      </Switch>
    </>
  );
};
export default EatsApp;
