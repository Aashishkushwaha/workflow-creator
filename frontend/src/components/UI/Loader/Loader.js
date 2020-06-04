import React, { useContext } from "react";
import LoaderStyles from "./LoaderStyles";
import ThemeContext from "../../../context/ThemeContext";

const Loader = ({}) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <LoaderStyles
      style={{
        background: currentTheme === "light" ? "#f1f1f1" : "#414141",
      }}
    >
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </LoaderStyles>
  );
};

export default Loader;
