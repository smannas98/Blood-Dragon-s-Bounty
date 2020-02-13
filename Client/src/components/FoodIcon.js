import React, { useState } from "react";

//Dependencies
import { Badge } from "react-bootstrap";

//Static
import Cake from "../static/cake.svg";
import Sandwich from "../static/sandwich.svg";
import Snack from "../static/snack.svg";
// import Baked from "../static/baked.svg";
import Meat from "../static/meat.svg";
import Candy from "../static/candy.svg";
import Pizza from "../static/pizza.svg";
import Fruit from "../static/fruit.svg";
import Blank from "../static/blank.svg";
import { ReactSVG } from "react-svg";
import "../styles/FoodIcon.css";

export const foodImages = {
  1: Fruit,
  2: Pizza,
  3: Sandwich,
  5: Snack,
  6: Meat,
  9: Candy,
  10: Cake
};

const FoodIcon = props => {
  // const [toggle, setToggle] = useState(false);

  const quantityClass =
    props.quantity > 0 ? "food-icon--active" : "food-icon--inactive";
  const toggleClass = props.active ? "food-icon--toggle" : "";

  if (props.variant == "icon") {
    return (
      <div
        className={`icon-grid__item food-icon ${quantityClass} ${toggleClass}`}
        onClick={() =>
          props.quantity > 0
            ? props.action(props.id, 0)
            : props.action(props.id, 1)
        }
      >
        <button className="food-icon__button">
          <ReactSVG
            src={foodImages[props.id] ? foodImages[props.id] : Blank}
            className="food-icon__button__image"
          />
        </button>
        <label className="icon-grid__item__label" htmlFor={props.id}>
          {props.label}
        </label>
      </div>
    );
  } else if (props.variant == "badge") {
    return (
      <Badge className="food-icon-badge" as="div">
        {//if theres an id...
        props.id ? (
          // also if the image is not blank...
          foodImages[props.id] ? (
            //... show the image
            <ReactSVG
              src={foodImages[props.id] ? foodImages[props.id] : Blank}
              className="food-icon-badge__image"
            />
          ) : (
            //... otherwise show the first 2 letters of the food name
            <span className="food-icon-badge__label">
              {props.label.substring(0, 1)}
            </span>
          )
        ) : (
          //if theres no id
          props.label && (
            <span
              className="food-icon-badge__label"
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
            >
              {props.label}
            </span>
          )
        )}
      </Badge>
    );
  } else if (props.variant == "loading") {
    return props.id && <ReactSVG src={foodImages[props.id]} className="food-icon-loading" />
  }
};

export default FoodIcon;
