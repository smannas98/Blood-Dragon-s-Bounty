import React, { useState, useEffect } from "react";

//Dependencies
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { CSSTransition } from "react-transition-group";

//Components
import MyKitchen from "./MyKitchen";
import { convertKitchenToSlug } from "./EatsApp";
import FoodIcon from "./FoodIcon";
import Loading from "./Loading.js";

//Styles
import "../styles/FloorView.css";
import "../styles/transitions.css";

const FloorView = ({ eats, floors }) => {

  const floorMessages = [
    "Nothin&rsquo; here",
    "Some food here.",
    "So much food!"
  ];

  return (
      <main className="app__container">
        <MyKitchen />
        <Container as="section">
          <Row>
            <Col>
              <header className="text-center">
                <h1>Kitchens</h1>
                <p>If you see food icons on kitchen below, that means there's food there. Select a kitchen for more details and to update available foods.</p>
              </header>
            </Col>
          </Row>
          {!eats ? <Loading /> :
          <Row>
            <Col>
              <div className="floor__nav">
                {Object.values(floors).map((floor, i) => {
                  let thisFloor = floor;
                  return (
                    <Card className="floor__box border-0" key={i}>
                      <Card.Body className="mx-4 mt-3 mb-0 pb-1">
                        <Row>
                          <Col md="2">
                            <Card.Title as="header">
                              <h1 className="floor__box__indicator">
                                <span className="floor__box__tag text-nowrap">
                                  floor
                                </span>
                                <span className="floor__box__number">
                                  {floor}
                                </span>
                              </h1>
                            </Card.Title>
                          </Col>
                          <Col md="10">
                            { eats.kitchens.map((kitchen, i) => {
                              if (kitchen.floor === thisFloor) {
                                let strKitchen = kitchen.name.replace(
                                  "kitchen",
                                  ""
                                );
                                let toKitchen = `/kitchen/${convertKitchenToSlug(
                                  strKitchen
                                )}`;
                                let badgeCount = 0;
                                return (
                                  <Row key={i}>
                                    <div className="floor__box__button-wrapper position-relative mb-5 d-inline-block">
                                      <LinkContainer to={toKitchen}>
                                        <Button>{strKitchen}</Button>
                                      </LinkContainer>
                                      <div className="floor__box__badge-wrapper">
                                        {//loop over the transaction table...
                                        eats.transactions.map(
                                          (transaction, i) => {
                                            //...and if the object kitchen id matches the current kitchen id...
                                            if (
                                              transaction.kitchenId ===
                                              kitchen.id
                                            ) {
                                              //increment the number of badges shown for each kitchen
                                              badgeCount++;
                                              //if the number of badges <= 4...
                                              if (badgeCount <= 4) {
                                                //...first check if it's the 4th, if it is show a "..."
                                                if (badgeCount === 4) {
                                                  return (
                                                    <FoodIcon
                                                      key={i}
                                                      label="..."
                                                      variant="badge"
                                                    />
                                                  );
                                                } else {
                                                  //... else show the badges, up to 3
                                                  // {eats.food.}
                                                  let foodName;
                                                  eats.food.forEach(foodItem =>
                                                    foodItem.id ===
                                                    transaction.foodId
                                                      ? (foodName =
                                                          foodItem.name)
                                                      : null
                                                  );
                                                  return (
                                                    <FoodIcon
                                                      key={i}
                                                      id={transaction.foodId}
                                                      label={foodName}
                                                      variant="badge"
                                                    />
                                                  );
                                                }
                                              }
                                            }
                                          }
                                        )}
                                      </div>
                                    </div>
                                  </Row>
                                );
                              }
                            })}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Col>
          </Row>}
        </Container>
      </main>
    // </div>
    // </CSSTransition>
  );
};

export default FloorView;
