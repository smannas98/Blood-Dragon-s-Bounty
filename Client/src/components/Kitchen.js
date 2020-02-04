import React, { useState, useEffect } from "react";

//Dependencies
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//Components
import Header from "../components/Header";

//Styles
import "../styles/Kitchen.css";

const Kitchen = (props) => {
  const [activeKitchen, setActiveKitchen] = useState();
  let kitchenPath = useRouteMatch();
  let { id } = useParams();

console.log(props.eats)

  const foods = props.data;

  return (
    <>
      <Header />
      <main>
        <Container fluid className="kitchen-main__hero px-0 position-relative">
          {/* <main className="app__container"> */}
          <div className="kitchen-main__hero__inner position-absolute text-center w-100">
            <h1>{id}</h1>
          </div>
        </Container>
        <Container className="kitchen-main__content">
          <Row>
            <Col>
              {Object.keys(foods).map((food, i) => 
                <p key={i}>{food.toString()}</p>
              )}
              <p>{JSON.stringify(props.data)}</p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Kitchen;
