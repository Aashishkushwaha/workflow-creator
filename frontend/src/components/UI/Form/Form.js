import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FormStyles from "./FormStyles";
import ThemeContext from "../../../context/ThemeContext";

const Form = ({ label, redirect, redirectLabel, onSubmitHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordFieldType, setPasswordFieldType] = useState("password");
  const { currentTheme } = useContext(ThemeContext);

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const onChangeHandler = (e) => {
    if (email.trim().length || password.trim().length) {
      setPasswordError("");
      setEmailError("");
    }

    e.target.name === "password"
      ? setPassword(e.target.value)
      : setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length === 0) {
      emailRef.current.style.borderBottom = "1px solid red";
      setEmailError("Invalid email");
    }

    if (password.trim().length < 8) {
      passwordRef.current.style.borderBottom = "1px solid red";
      setPasswordError("Invalid password, Password must be 8 characters long.");
    } else {
      let data = { email, password };
      onSubmitHandler(data);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <FormStyles onSubmit={onSubmit}>
      <h2>{label}</h2>
      <div className="formGroup">
        <label>Email</label>
        <Input
          ref={emailRef}
          placeholder="user@test.com"
          type="text"
          value={email}
          name="email"
          onChange={onChangeHandler}
        />
        <span className="error">{emailError}</span>
      </div>
      <div className="formGroup passwordGroup">
        <label>Password</label>
        <Input
          ref={passwordRef}
          placeholder="********"
          name="password"
          type={passwordFieldType}
          value={password}
          onChange={onChangeHandler}
        />
        <span
          className="password__viewer"
          onMouseDown={() => setPasswordFieldType("text")}
          onMouseUp={() => setPasswordFieldType("password")}
        >
          👁
        </span>
        <span className="error">{passwordError}</span>
      </div>
      <div className="formGroup">
        <Button
          bgColor={currentTheme === "light" ? "#f30857" : "dodgerblue"}
          style={{ width: "100%" }}
          solid
          color="white"
          border="2px solid red"
        >
          {label}
        </Button>
      </div>
      <div className="formGroup">
        <NavLink to={redirect}>{redirectLabel}</NavLink>
      </div>
    </FormStyles>
  );
};

export default Form;
