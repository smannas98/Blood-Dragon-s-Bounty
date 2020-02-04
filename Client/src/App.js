import React, { useState, useEffect } from "react";

//Dependencies
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

//Components
import EatsApp from "./components/EatsApp";

//Styles
import "./styles/nav.css";
import "./styles/App.css";

function App() {

  const appStyles = {
    border: "solid",
    width: "75%",
    margin: "auto",
    height: "calc(100% - 150px)"
  };

  // const dougsObject =
  // {
  //   transactions: {
  //     "5435": 1,
  //     "2345": 0,
  //   }
  // // }

  // send({ dougsObject }, `/api/${id}`);

  return (
    <Router>
      <Route path="*">
        <EatsApp />
      </Route>
    </Router>
  );
}

export default App;
