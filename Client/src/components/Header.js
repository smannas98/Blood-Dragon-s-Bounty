import React, { useState } from "react";

//Dependencies
import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import IdleTimer from "react-idle-timer";
import Moment from "react-moment";

//Styles
import "../styles/Header.css";

const Header = ({refresh}) => {
  const [idle, setIdle] = useState(false);

  let timestamp = Date.now();

  return (
    <>
      <IdleTimer
        element={document}
        onIdle={() => setIdle(true)}
        // onActive={() => setIdle(false)}
        debounce={250}
        timeout={1000 * 60 * 0.5} //after 30 seconds
        // timeout={1000}
      />
      <Navbar fixed="top" className="app__header justify-content-end">
        <Navbar.Brand>
          <Link to="/">
            <div className="app__header__logo">
              <div className="app__header__logo__inner">
                <span className="app__header__line1">Office</span>
                <span className="app__header__line2">Eats</span>
              </div>
            </div>
          </Link>
        </Navbar.Brand>
        <div
          className={`btn-refresh mt-2 text-center ${idle &&
            "btn-refresh--active"}`}
        >
          <a href="#"
            onClick={() => window.location.reload(false)}
            className="d-inline-block mr-2"
          >
            <small>
              ↻ Refreshed&nbsp;
              <Moment interval={1000} to={timestamp}></Moment>
            </small>
            </a>
          {/* <Button
            variant="secondary mb-0 d-inline-block"
            
          >
            Refresh
          </Button> */}
        </div>
      </Navbar>
    </>
  );
};

export default Header;
