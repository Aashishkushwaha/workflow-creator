import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(
  ({ name, type, placeholder, value, onChange }, ref) => (
    <input
      name={name}
      ref={ref}
      className={classes.Input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
);

export default Input;
