import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawerStyles from "./SideDrawerStyles";
import Button from "../Button/Button";
import AuthContext from "../../../context/AuthContext";
import SideDrawerContext from "../../../context/SideDrawerContext";
import ModalContext from "../../../context/ModalContext";

const SideDrawer = ({ value, onBackDropClick, location, match, history }) => {
  const assignedClass = ["sideDrawer"];
  const SideDrawerContextValue = useContext(SideDrawerContext);
  const ModalContextValue = useContext(ModalContext);
  const { token, logout } = useContext(AuthContext);

  if (SideDrawerContextValue.showSideDrawer)
    assignedClass.push("showSideDrawer");

  return (
    <>
      <Backdrop value={value} onBackDropClick={onBackDropClick} />
      <SideDrawerStyles>
        <div className={assignedClass.join(" ")}>
          <nav>
            <ul>
              {!token && (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
              {!token && (
                <li>
                  <NavLink to="register">Register</NavLink>
                </li>
              )}
              {token && (
                <li>
                  <Button
                    bgColor="grey"
                    solid
                    color="white"
                    border="2px solid red"
                    onClick={() => {
                      logout();
                      SideDrawerContextValue.setShowSideDrawer(false);
                      history.push("/login");
                      ModalContextValue.setModalContent("You have logged out successfully. 😊");
                      ModalContextValue.setShowModal(true);
                    }}
                  >
                    Logout
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </SideDrawerStyles>
    </>
  );
};

export default withRouter(SideDrawer);
