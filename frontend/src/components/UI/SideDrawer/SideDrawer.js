import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawerStyles from "./SideDrawerStyles";
import SideDrawerContext from "../../../context/SideDrawerContext";

const SideDrawer = ({ value, onBackDropClick }) => {
  const assignedClass = ["sideDrawer"]
  const SideDrawerContextValue = useContext(SideDrawerContext);
  if(SideDrawerContextValue.showSideDrawer)
    assignedClass.push("showSideDrawer");

  return (
    <>
      <Backdrop value={value} onBackDropClick={onBackDropClick} />
      <SideDrawerStyles>
        <div className={assignedClass.join(" ")}>
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
        </div>
      </SideDrawerStyles>
    </>
  );
};

export default SideDrawer;
