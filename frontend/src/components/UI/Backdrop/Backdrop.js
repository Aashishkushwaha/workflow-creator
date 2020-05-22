import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = ({ value, onBackDropClick, children }) => {
  return (
    <div
      className={classes.container}
      onClick={(e) => {
        onBackDropClick(!value);
      }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
