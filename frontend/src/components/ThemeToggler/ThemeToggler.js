import React from "react";
import ThemeContext from "../../context/ThemeContext";
import ThemeTogglerStyles from "./ThemeTogglerStyles";

const ThemeToggler = (props) => {
  return (
    <ThemeContext.Consumer>
      {(ThemeContext) => {
        console.log(ThemeContext);
        return (
          <ThemeTogglerStyles>
            <div
              className="themeToggler"
              style={
                ThemeContext.currentTheme === "dark"
                  ? { background: "#fff", border: "1px solid black" }
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
                    ? { right: "0rem", background: "#000" }
                    : null
                }
              ></span>
            </div>
          </ThemeTogglerStyles>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggler;
