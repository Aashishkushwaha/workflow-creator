import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import NavBarStyles from "./NavBarStyles";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/AuthContext";
import SideDrawerContext from "../../context/SideDrawerContext";
import ModalContext from "../../context/ModalContext";

const NavBar = ({ history, match, location }) => {
  const SideDrawerContextValue = useContext(SideDrawerContext);
  const ModalContextValue = useContext(ModalContext);
  const { token, logout } = useContext(AuthContext);
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
                    ModalContextValue.setModalContent(
                      "You have logged out successfully. 😊"
                    );
                    ModalContextValue.setShowModal(true);
                  }}
                >
                  Logout
                </Button>
              </li>
            )}
          </ul>
        </nav>
      </NavBarStyles>
    </>
  );
};

export default withRouter(NavBar);
