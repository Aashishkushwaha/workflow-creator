import React, { useContext } from "react";
import ModalContext from '../../context/ModalContext';
import Form from "../UI/Form/Form";

const RegisterPage = (props) => {
  let ModalContextValue = useContext(ModalContext)
  
  const onSubmitHandler = async (formData) => {
    try {

      let response = await fetch("http://localhost:4500/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      let res = await response.json();

      ModalContextValue.setModalContent(res.message || res.error);
      ModalContextValue.setShowModal(true);
    
    } catch (error) {
      console.log(error);
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
