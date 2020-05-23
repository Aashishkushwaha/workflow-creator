import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import LoginPage from "./components/LoginPage/LoginPage";
import Workflow from './components/Workflow/Workflow';
import NavBar from "./components/NavBar.js/NavBar";
import Node from './components/Node/Node';
import { ThemeProvider } from "styled-components";
import ThemeContext from "./context/ThemeContext";
import AuthContext from "./context/AuthContext";
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
  const [token, setToken] = useState("fasdf");
  const [userId, setUserId] = useState(null);

  const login = ({ userId, token }) => {
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  return (
    <Router>
      <AuthContext.Provider value={{ userId, token, login, logout }}>
        <ModalContext.Provider
          value={{ showModal, modalContent, setShowModal, setModalContent }}
        >
          <SideDrawerContext.Provider
            value={{ showSideDrawer, setShowSideDrawer }}
          >
            <ThemeContext.Provider
              value={{ currentTheme, changeTheme: setCurrentTheme }}
            >
              <ThemeProvider theme={currentTheme === "light" ? light : dark}>
                <ThemeToggler />

                <GlobalStyles />

                <Modal value={showModal} onBackDropClick={setShowModal}>
                  {modalContent}
                </Modal>

                <SideDrawer
                  value={showSideDrawer}
                  onBackDropClick={setShowSideDrawer}
                />

                <NavBar />

                <Switch>
                  {token && <Redirect from="/" to="/workflow" exact />}
                  {token && <Redirect from="/login" to="/workflow" exact />}
                  {token && <Redirect from="/register" to="/workflow" exact />}
                  {token && <Route path="/workflow" component={Workflow} exact />}
                  {token && <Route path="/workflow/:id" component={Node} exact />}
                  {!token && <Redirect from="/workflow" to="/login" exact />}
                  {!token && (
                    <Route path="/login" component={LoginPage} />
                  )}
                  {!token && (
                    <Route path="/register" render={() => <RegisterPage />} />
                  )}
                  <Route>
                    <h3>Error 404: Page Not Found</h3>
                  </Route>
                </Switch>
              </ThemeProvider>
            </ThemeContext.Provider>
          </SideDrawerContext.Provider>
        </ModalContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
