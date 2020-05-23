import React, { useContext } from "react";
import ModalContext from "../../../context/ModalContext";
import Backdrop from "../Backdrop/Backdrop";
import ModalStyles from "./ModalStyles";

const Modal = (props) => {
  const ModalContextValue = useContext(ModalContext);

  const modalCloseHandler = () => {
    ModalContextValue.setModalContent("");
    ModalContextValue.setShowModal(false);
  };

  return (
    <>
      <Backdrop value={props.value} onBackDropClick={props.onBackDropClick} />
      <ModalStyles>
        <h3>{props.children}</h3>
        <span className={"modalClose"} onClick={modalCloseHandler}>
          &times;
        </span>
      </ModalStyles>
    </>
  );
};

export default Modal;
