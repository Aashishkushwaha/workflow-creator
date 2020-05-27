import React, { useContext } from "react";
import ModalContext from "../../../../context/ModalContext";
import Backdrop from "../../Backdrop/Backdrop";
import ConfirmModalStyles from "../ModalStyles";
import Button from "../../Button/Button";

const Modal = ({ value, onBackDropClick, children, onConfirmClickHandler }) => {
  const ModalContextValue = useContext(ModalContext);

  const modalCloseHandler = () => {
    ModalContextValue.setConfirmModalContent("");
    ModalContextValue.setShowConfirmModal(false);
  };

  const onConfirmHandler = (e) => {
    onConfirmClickHandler();
    ModalContextValue.setShowConfirmModal(false);
    ModalContextValue.setConfirmModalContent("");
    ModalContextValue.setOnConfirmHandler(null);
  };

  const assignedClasses = ["modal"];
  if (ModalContextValue.showConfirmModal) assignedClasses.push("showModal");

  return (
    <>
      <Backdrop value={value} onBackDropClick={onBackDropClick} />
      <ConfirmModalStyles>
        <div className={assignedClasses.join(" ")}>
          {value && (
            <>
              <h3>{children}</h3>
              <span className={"modalClose"} onClick={modalCloseHandler}>
                &times;
              </span>
              <div className="action-buttons__container">
                <Button
                  bgColor="dodgerblue"
                  style={{ margin: "0" }}
                  solid
                  color="white"
                  border="2px solid red"
                  onClick={onConfirmHandler}
                >
                  Confirm
                </Button>
                <Button
                  bgColor="dodgerblue"
                  style={{ margin: "0" }}
                  solid
                  color="white"
                  border="2px solid red"
                  onClick={modalCloseHandler}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </ConfirmModalStyles>
    </>
  );
};

export default Modal;
