import React, { useContext } from "react";
import Form from "../UI/Form/Form";
import ModalContext from "../../context/ModalContext";
import AuthContext from "../../context/AuthContext";

const LoginPage = (props) => {
  let ModalContextValue = useContext(ModalContext);
  let AuthContextValue = useContext(AuthContext);

  const onSubmitHandler = async (formData) => {
    try {
      let response = await fetch("http://localhost:4500/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let res = await response.json();
      
      if (res.message) {
        const data = { token: res.token, userId: res.userId };
        AuthContextValue.login(data);
        
        props.history.push("/workflow");
        ModalContextValue.setModalContent("You have logged in successfully. 😊");
        ModalContextValue.setShowModal(true);
      } else {
        ModalContextValue.setModalContent(res.error);
        ModalContextValue.setShowModal(true);
      }
    } catch (error) {
      console.log(error);
      ModalContextValue.setModalContent("Internal Error Occurred 😩");
      ModalContextValue.setShowModal(true);
    }
  };

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
