import React, { useState, useEffect } from "react";

//Dependencies
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//Styles
import './styles/dist/bootstrap.min.css';
import "./styles/App.css";

//Components
import EatsApp from "./components/EatsApp";

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
