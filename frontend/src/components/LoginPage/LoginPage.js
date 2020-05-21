import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import classes from "./LoginPage.module.css";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.container}>
      <form>
        <div>
          <label>Email</label>
          <input
            placeholder="user@test.com"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button
            bgColor="dodgerblue"
            solid
            color="white"
            border="2px solid red"
          >
            Login
          </Button>
        </div>
        <div>
          <NavLink to="/register">New User? Signup</NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
