import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavBarStyles from "./NavBarStyles";
import SideDrawerContext from "../../context/SideDrawerContext";

const NavBar = (props) => {
  const SideDrawerContextValue = useContext(SideDrawerContext);

  const onHambergerClickHandler = () => {
    SideDrawerContextValue.setShowSideDrawer(
      !SideDrawerContextValue.showSideDrawer
    );
  };

  return (
    <>
      <NavBarStyles>
        <nav>
          <span
            className="hamberger__wrapper"
            onClick={onHambergerClickHandler}
          >
            <span className="hamberger"></span>
          </span>
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
