import React, { useState, useEffect } from "react";

//Dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route } from "react-router-dom";

//Components
import Header from "../components/Header"
import MyKitchen from "../components/MyKitchen"
import Button from "../components/Button"

//Styles
import "../styles/Floors.css";

const Floors = props => {
  // const [floors, setFloors] = useState([]);

  // let floorsArray = [];
  // const createFloorArray = () => {
  //   eats.map((kitchen, i) => {
  //     let floor = kitchen.floor;
  //     floorsArray.push(floor);
  //   });
  //   floorsArray = floorsArray.filter((a, b) => floorsArray.indexOf(a) === b);
  //   return floorsArray;
  // // };
  // console.log(props.data)
  const kitchens = props.data;
  const allFloors = [...new Set(kitchens.map(kitchen => kitchen.floor))];

  const floorMessages = [
    "Nothin&rsquo; here",
    "Some food here.",
    "So much food!"
  ];
  return (
    <>
      <Header />
      <main className="app__container">
        <MyKitchen />
        <section className="floor__section container">
          <header>
            <h1>Kitchens</h1>
          </header>
          <div className="floor__nav">
            {allFloors.map((floor, i) => {
              let thisFloor = floor;
              return (
                <div className="floor__box" key={i}>
                  <header className="floor__box__header">
                    <h1 className="floor__box__indicator">
                      <span className="floor__box__tag">floor</span>
                      <span className="floor__box__number">{floor}</span>
                    </h1>
                    <h2 className="floor__box__message">Nothin&rsquo; here.</h2>
                  </header>
                  <div
                    className="floor__box__buttons"
                    style={{ textTransform: "capitalize" }}
                  >
                    {kitchens.map((kitchen, i) => {
                      if (kitchen.floor === thisFloor) {
                        let strKitchen = kitchen.name
                          .toLowerCase()
                          .replace("kitchen", "");
                        let toKitchen = `/kitchen/${strKitchen.replace(
                          " ",
                          ""
                        )}`;
                        return (
                          <Button
                            key={i}
                            type="primary"
                            to={toKitchen}
                            text={strKitchen}
                            // onClick={() => setFloor(thisFloor)}
                          ></Button>
                          //
                        );
                      }
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Floors;
