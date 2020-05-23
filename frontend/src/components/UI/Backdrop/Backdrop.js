import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = ({ value, onBackDropClick, children }) => {
  if(!value)
    return null;
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
