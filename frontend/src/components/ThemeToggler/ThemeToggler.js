import React from "react";
import ThemeContext from "../../context/ThemeContext";
import classes from "./ThemeToggler.module.css";

const ThemeToggler = (props) => {
  return (
    <ThemeContext.Consumer>
      {(ThemeContext) => {
        return (
          <div>
            <div
              className={classes.themeToggler}
              style={
                ThemeContext.currentTheme === "dark"
                  ? { background: "#fff" }
                  : null
              }
              onClick={() => {
                if (ThemeContext.currentTheme === "light") {
                  ThemeContext.changeTheme("dark");
                } else {
                  ThemeContext.changeTheme("light");
                }
              }}
            >
              <span
                style={
                  ThemeContext.currentTheme === "dark"
                    ? { left: "53%", background: "#4f4f4f" }
                    : null
                }
              ></span>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggler;
