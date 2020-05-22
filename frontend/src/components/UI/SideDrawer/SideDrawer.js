import React from "react";
import { NavLink } from "react-router-dom";
import SideDrawerStyles from "./SideDrawerStyles";
import Backdrop from "../Backdrop/Backdrop";

const SideDrawer = ({value, onBackDropClick}) => {
  return (
    <Backdrop value={value} onBackDropClick={onBackDropClick}>
      <SideDrawerStyles>
        <nav>
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="register">Register</NavLink>
            </li>
          </ul>
        </nav>
      </SideDrawerStyles>
    </Backdrop>
  );
};

export default SideDrawer;
