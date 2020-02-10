import React, { useState } from "react";

//Dependencies
import axios from "axios";

//Styles
import "../styles/SubmitButton.css";
import "../styles/transitions.css";

const SubmitButton = props => {
  const inClass = props.in ? "submit__wrapper--in" : null
    return (
      <div className={`submit__wrapper ${inClass}`}>
        <button
          className="submit__button"
          onClick={() => props.action(props.kitchen, props.data)}
        >
          {`${props.text}`}
        </button>
      </div>
    );
};

export default SubmitButton;
