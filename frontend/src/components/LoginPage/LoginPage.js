import React from "react";
import Form from "../UI/Form/Form";

const LoginPage = (props) => {
  const onSubmitHandler = (formData) => {
    console.log(formData);
  }

  return (
    <Form
      label="Login"
      redirect="/register"
      redirectLabel="New User? Register"
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default LoginPage;