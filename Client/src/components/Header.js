import React from "react";

//Dependencies
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap"
//Styles
import "../styles/Header.css";

function Header() {
    return (
      <Navbar fixed="top" className="app__header">
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
      </Navbar>
    );
}

export default Header;