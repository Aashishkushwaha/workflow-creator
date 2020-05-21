import React from "react";
import { NavLink } from "react-router-dom";
import NavBarStyles from "./NavBarStyles";

const NavBar = (props) => {
  return (
    <>
      <NavBarStyles>
        <nav>
          <h3>Workflow</h3>
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="register">Register</NavLink>
            </li>
          </ul>
        </nav>
      </NavBarStyles>
    </>
  );
};

export default NavBar;
