import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nav } from "../constants/nav";
import { Link, withRouter } from "react-router-dom";

function Nav({ location }) {
  return (
    <nav className="nav">
      {nav.map(navItem => (
        <Link
          to={navItem.path}
          className={
            location.pathname === navItem.path
              ? "nav__link nav__link--active"
              : "nav__link"
          }
        >
          <FontAwesomeIcon className="nav__icon" icon={navItem.icon} />
        </Link>
      ))}
    </nav>
  );
}

export default withRouter(Nav);
