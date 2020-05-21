import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar.js/NavBar";
import LoginPage from "./components/LoginPage/LoginPage";
import GlobalStyles from "./GlobalStyles";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

const light = {
  bgColor: "#8644f0", //"#481ce2",
  color: "#fff", //"#4c4c4c",
  border: "1px",
  borderColor: "##781ce2",
};

const dark = {
  bgColor: "#414141",
  color: "#fff",
  border: "1px ",
  borderColor: "#111",
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <Router>
      
      <ThemeContext.Provider
        value={{ currentTheme, changeTheme: setCurrentTheme }}
      >
        <ThemeToggler />
        <ThemeProvider theme={currentTheme === "light" ? light : dark}>
          <GlobalStyles />

          <NavBar />

          <Switch>
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="/register" render={() => <h3>Register</h3>} />
          </Switch>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
