import React, { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import LoaderContext from "../../context/LoaderContext";
import Form from "../UI/Form/Form";
import { BASE_URL } from "../../Api";

const RegisterPage = (props) => {
  let ModalContextValue = useContext(ModalContext);
  let { setShowLoader } = useContext(LoaderContext);

  const onSubmitHandler = async (formData) => {
    try {
      setShowLoader(true);
      let response = await fetch(`${BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let res = await response.json();
      setShowLoader(false);
      ModalContextValue.setModalContent(res.message || res.error);
      ModalContextValue.setShowModal(true);
    } catch (error) {
      console.log(error);
      ModalContextValue.setModalContent("Internal Error Occurred 😩");
      ModalContextValue.setShowModal(true);
    }
  };

  return (
    <Form
      label="Register"
      redirect="/login"
      redirectLabel="Existing User? Login"
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default RegisterPage;
