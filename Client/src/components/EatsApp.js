import React, { useState, useEffect } from "react";

//Dependencies
import axios from "axios";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
import Floors from "../components/Floors";
import Kitchen from "../components/Kitchen";

const EatsApp = () => {
  const [eats, setEats] = useState([]);
  const [oneKitchen, setOneKitchen] = useState([]);
  const [lastUpdated, setLastUpdated] = useState();
  let location = useLocation();

  async function fetchData() {
    let dataResponse = await axios("/api");
    return setEats(dataResponse.data);
  }

  async function fetchKitchenData(kitchenId) {
    let dataResponse = await axios(`/api/${kitchenId}`);
    console.log(dataResponse.data.Transactions)
    return setOneKitchen(dataResponse.data);
  }

  useEffect(() => {
    fetchData();
    fetchKitchenData(11);
    // setLastUpdated(new Date())
  }, []);

  const Obj = {
    "1": 100,
    "2": 500,
    "3": 500,
  };


  function postStuff() {
    console.log('gona post stuff')
    axios
      .post(
        "/api/11",
        Obj)
      .then(function(response) {
        console.log("response is " + response);
      })
      .catch(function(error) {
        console.log("error is " + error);
      });
  }

  const handlePostClick = () => {
    postStuff();
    let update = new Date();
    setLastUpdated(update.toString());
    
  };

  const handleFetchKitchenClick = (kitchenId) => {
    fetchKitchenData(11);
    console.log(oneKitchen)
  };

  return (
    <>
      <div style={{ position: "absolute", top: "50%" }}>
        <p>last updated = {lastUpdated ? lastUpdated.toString() : null}</p>
        <p>
          <button onClick={handlePostClick}>Post</button>
        </p>
        <p>
          <button onClick={handleFetchKitchenClick}>Fetch Kitchen Data</button>
        </p>
        <div style={{ maxWidth: "500px" }}></div>
      </div>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={300}>
          <Switch location={location}>
            <Route exact path="/kitchen">
              <Redirect to="/" />
            </Route>
            <Route path="/kitchen/:id">
              <Kitchen id=":id" data={oneKitchen} />
            </Route>
            <Route path="/">
              <Floors data={eats} />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};
export default EatsApp;
