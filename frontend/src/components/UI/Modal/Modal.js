import React, { useContext } from "react";
import ModalContext from "../../../context/ModalContext";
import Backdrop from "../Backdrop/Backdrop";
import ModalStyles from "./ModalStyles";

const Modal = ({ value, onBackDropClick, children }) => {
  const ModalContextValue = useContext(ModalContext);

  const modalCloseHandler = () => {
    ModalContextValue.setModalContent("");
    ModalContextValue.setShowModal(false);
  };

  const assignedClasses = ["modal"];
  if (ModalContextValue.showModal) assignedClasses.push("showModal");

  return (
    <>
      <Backdrop value={value} onBackDropClick={onBackDropClick} />
      <ModalStyles>
        <div className={assignedClasses.join(" ")}>
          {value && (
            <>
              <h3>{children}</h3>
              <span className={"modalClose"} onClick={modalCloseHandler}>
                &times;
              </span>
            </>
          )}
        </div>
      </ModalStyles>
    </>
  );
};

export default Modal;
