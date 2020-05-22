import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar.js/NavBar";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./context/ThemeContext";
import ModalContext from "./context/ModalContext";
import SideDrawerContext from "./context/SideDrawerContext";
import Modal from "./components/UI/Modal/Modal";
import SideDrawer from "./components/UI/SideDrawer/SideDrawer";
import GlobalStyles from "./GlobalStyles";

const light = {
  bgColor: "#5CDB95",
  color: "#000",
  border: "1px",
  borderColor: "#5CDB95",
};

const dark = {
  bgColor: "#414141",
  color: "#fff",
  border: "1px ",
  borderColor: "#111",
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [modalContent, setModalContent] = useState("");

  return (
    <Router>
      <ModalContext.Provider
        value={{ showModal, modalContent, setShowModal, setModalContent }}
      >
        <SideDrawerContext.Provider
          value={{ showSideDrawer, setShowSideDrawer }}
        >
          <ThemeContext.Provider
            value={{ currentTheme, changeTheme: setCurrentTheme }}
          >
            <ThemeToggler />
            <ThemeProvider theme={currentTheme === "light" ? light : dark}>
              <GlobalStyles />

              {showModal && (
                <Modal value={showModal} onBackDropClick={setShowModal}>
                  {modalContent}
                </Modal>
              )}
              {showSideDrawer && (
                <SideDrawer value={showSideDrawer} onBackDropClick={setShowSideDrawer} />
              )}

              <NavBar />

              <Switch>
                <Route path="/login" render={() => <LoginPage />} />
                <Route path="/register" render={() => <RegisterPage />} />
              </Switch>
            </ThemeProvider>
          </ThemeContext.Provider>
        </SideDrawerContext.Provider>
      </ModalContext.Provider>
    </Router>
  );
}

export default App;
