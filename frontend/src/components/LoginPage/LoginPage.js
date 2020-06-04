import React, { useContext } from "react";
import Form from "../UI/Form/Form";
import ModalContext from "../../context/ModalContext";
import LoaderContext from "../../context/LoaderContext";
import AuthContext from "../../context/AuthContext";
import { BASE_URL } from "../../Api";

const LoginPage = (props) => {
  let ModalContextValue = useContext(ModalContext);
  let AuthContextValue = useContext(AuthContext);
  const { setShowLoader } = useContext(LoaderContext);

  const onSubmitHandler = async (formData) => {
    try {
      setShowLoader(true);

      let response = await fetch(`${BASE_URL}/api/users/login`, {
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
        setShowLoader(false);
        props.history.push("/workflow");
        ModalContextValue.setModalContent(
          "You have logged in successfully. 😊"
        );
        ModalContextValue.setShowModal(true);
      } else {
        setShowLoader(false);
        ModalContextValue.setModalContent(res.error);
        ModalContextValue.setShowModal(true);
      }
    } catch (error) {
      console.log(error);
      setShowLoader(false);
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
