import React, { useState, useEffect } from "react";

//Dependencies
import axios from "axios";
import {
  BrowserRouter as Router,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

//Components
import FoodIcon from "./FoodIcon";
import SubmitButton from "./SubmitButton";
import { convertKitchenToSlug } from "./EatsApp";
import Loading from "./Loading";
import Popup from "./Popup";
import FlightofTheBloodDragon from "./FlightofTheBloodDragon";

//Static
import Eco from "../static/eco.jpg";
import KellyCafe from "../static/kellycafe.jpg";
import PetesDiner from "../static/petes.jpg";
import Sports from "../static/sports.jpg";
import SundayRiver from "../static/sundayriver.jpg";
import TreeTop from "../static/treetop.jpg";
import Checkmark from "../static/checkmark.svg";

//Styles
import "../styles/Kitchen.css";
// import { CSSTransition } from "react-transition-group";

let dragonCount = 0;

const Kitchen = ({ eats }) => {
  const [activeKitchen, setActiveKitchen] = useState({
    id: "0",
    name: "Kitchen"
  });
  const [transactions, setTransactions] = useState();
  const [foodNames, setFoodNames] = useState();
  const [submitItems, setSubmitItems] = useState({});
  const [postResponse, setPostResponse] = useState(false);
  const [dragon, setDragon] = useState(false);
  // const [lastUpdated, setLastUpdated] = useState("");
  // const [inProp, setInProp] = useState(false);

  // let kitchenPath = useRouteMatch();
  let { id } = useParams();

  async function fetchKitchenData(kitchenId) {
    let dataResponse = await axios(`/api/${kitchenId}`);
    return (
      setTransactions(dataResponse.data.Transactions),
      setFoodNames(dataResponse.data.Food)
      // setInProp(true)
    );
  }

  const getKitchenInfo = slug => {
    let kitchenId;
    let kitchenName;

    eats.kitchens.map((kitchen, i) => {
      let strKitchen = convertKitchenToSlug(
        kitchen.name.toLowerCase().replace("kitchen", "")
      );
      if (strKitchen == slug) {
        kitchenId = kitchen.id;
        kitchenName = kitchen.name;
      }
    });
    const kitchenObj = { name: kitchenName, id: kitchenId };
    return kitchenObj;
  };
  const kitchenInfo = getKitchenInfo(id);

  useEffect(() => {
    if (eats.kitchens.length > 0) {
      setActiveKitchen(kitchenInfo);
    }
  }, [eats]);

  useEffect(() => {
    fetchKitchenData(kitchenInfo.id);
  }, [activeKitchen]);

  const handleIconClick = (foodId, quantity) => {
    function removeByKey(myObj, deleteKey) {
      return Object.keys(myObj)
        .filter(key => key !== deleteKey)
        .reduce((result, current) => {
          result[current] = myObj[current];
          return result;
        }, {});
    }
    let submission = {};
    let clone = {};
    if (submitItems && !submitItems.hasOwnProperty(foodId)) {
      submission = { ...submitItems, [foodId]: quantity };
      setSubmitItems(submission);
    } else if (submitItems && submitItems.hasOwnProperty(foodId)) {
      if (Object.entries(submitItems).length > 1) {
        clone = Object.assign(submitItems);
        delete clone[foodId];
        setSubmitItems(removeByKey(clone, foodId));
      } else {
        setSubmitItems(submission);
      }
    }
  };

  const postTransactions = (kitchenId, data) => {
    axios
      .post(`/api/${kitchenId}`, data)
      .then(response => {
        setSubmitItems({});
        fetchKitchenData(kitchenInfo.id);
        setPostResponse({
          title: "Success!",
          message: "Your update has been sent.",
          button: "Hooray!",
          variant: "success",
          image: Checkmark
        });
      })
      .catch(function(error) {
        setPostResponse({
          title: "Oh dear...",
          message: "There was a problem submitting. Please try again.",
          button: "OK",
          variant: "danger"
        });
        console.log("error is " + error);
      });
  };

  const handleSubmit = (kitchenId, data) => {
    postTransactions(kitchenId, data);
  };

  const chooseKitchenImage = kitchenId => {
    switch (kitchenId) {
      case 42:
        return Eco;
        break;
      case 31:
        return KellyCafe;
        break;
      case 11:
        return PetesDiner;
        break;
      case 32:
        return Sports;
        break;
      case 12:
        return SundayRiver;
        break;
      case 41:
        return TreeTop;
        break;
      default:
        return null;
    }
  };
  return (
    // <CSSTransition
    //   timeout={0}
    //   in={inProp}
    //   classNames="transition-kitchen"
    // >
    // <div className="transition-kitchen">

    <main className="kitchen-main">
      <Container fluid className="kitchen-main__hero px-0 position-relative">
        <Image
          src={chooseKitchenImage(kitchenInfo.id)}
          alt={`${kitchenInfo.name}`}
          className="kitchen-main__hero__image"
        />
        <div className="kitchen-main__hero__inner position-absolute text-center w-100" onClick={() => setDragon(true)}>
          <h1 className="display-1 p-0 m-0">{activeKitchen.name}</h1>
            <h6>Last updated at 2:37 P.M.</h6>
          </div>
          <SubmitButton
            text={`Update ${Object.entries(submitItems).length} ${
              Object.entries(submitItems).length > 1 ? `items` : `item`
            }`}
            kitchen={activeKitchen.id}
            data={submitItems}
            in={Object.entries(submitItems).length > 0}
            action={handleSubmit}
          />
        </Container>
        <Container className="kitchen-main__content">
          <Row>
            <Col>
              <p className="text-center mb-1">
                See food in this kitchen? Select items below to alert the
                masses.
              </p>

              <p className="text-center mb-4">
                &nbsp;
                {Object.entries(submitItems).length > 0 && (
                  <a
                    href="#"
                    className="clear-all-link"
                    onClick={() => setSubmitItems({})}
                  >
                    Clear All
                  </a>
                )}
              </p>

              <Popup
                title={postResponse.title}
                body={postResponse.message}
                show={postResponse}
                image={postResponse.image}
                button={postResponse.button}
                variant={postResponse.variant}
                onClose={() => setPostResponse(false)}
              />
            </Col>
          </Row>
          {!transactions && (
            <Row>
              <Col className="text-center">
                <Loading waitingOn={transactions && foodNames} />
              </Col>
            </Row>
          )}
          <Row>
            <Col>
              <div className="icon-grid">
                {transactions &&
                  eats.food.map((foodItem, i) => {
                    let quantity;
                    transactions &&
                      transactions.map((transaction, i) => {
                        if (transaction.foodId === foodItem.id) {
                          quantity = transaction.quantity;
                        }
                      });
                    return (
                      <FoodIcon
                        key={i}
                        id={foodItem.id}
                        quantity={quantity}
                        action={handleIconClick}
                        active={submitItems.hasOwnProperty(foodItem.id)}
                        label={foodItem.name}
                        variant="icon"
                      />
                    );
                  })}
              </div>
            </Col>
          </Row>
          {dragon && <FlightofTheBloodDragon />}
        </Container>
      </main>
    // </div>
    // </CSSTransition>
  );
};

export default Kitchen;
