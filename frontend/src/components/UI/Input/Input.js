import React from "react";
import InputStyles from "./InputStyles";

const Input = React.forwardRef(
  ({ name, type, placeholder, value, onChange }, ref) => (
    <InputStyles
      name={name}
      ref={ref}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
);

export default Input;
