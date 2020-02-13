import React, { useState, useEffect } from "react";

//Dependencies
import { Button, Link } from 'react-bootstrap'

//Components
import FoodIcon, { foodImages } from "./FoodIcon";

//Styles
import "../styles/Loading.css";


let counter = 0;
let timeout = 0;

const Loading = ({waitingOn}) => {
  const [imageState, setImageState] = useState(1);
  const [timer, setTimer] = useState(0);
  let imageOptions = [];
  const getImageOptions = () => {
    Object.keys(foodImages).map(foodKey => imageOptions.push(foodKey));
  };
  getImageOptions();
  let loopImage = () => {
    if (counter < imageOptions.length - 1) {
      counter++;
    } else if (counter === imageOptions.length - 1) {
      counter = 0;
      timeout++;
    }
    setTimer(timeout);
    setImageState(imageOptions[counter]);
  }
  console.log(counter)

  const getImage = () => setInterval(loopImage, 1000);
  

  useEffect(() => {
    getImage()
    return () => {
      clearInterval(counter)
      clearInterval(timeout)
    };
  }, [waitingOn]);

  if (timer < 1 ) {
  return <div className="loading-icon__wrapper">
        {imageOptions && <FoodIcon variant="loading" id={imageState} />}
      </div>
  } else {
    clearInterval(counter);
    return (
      <div className="loading-icon__error text-center">
        <h2>Something went wrong</h2>
        <p className="lead mb-0">Thanks for playing.</p>
        <Button onClick={() => window.location.reload(false)}>Refresh</Button>
        <p><a href="https://commonwealth.service-now.com/sp?id=sc_cat_item&sys_id=bac05daf4f4fe200a0948a4e0210c7c4&sysparm_category=b831588bdb973700a5d925894b9619b1" target="_blank" rel="noopener noreferrer">Let us know</a></p>
      </div>
    );
  }
};

export default Loading;
