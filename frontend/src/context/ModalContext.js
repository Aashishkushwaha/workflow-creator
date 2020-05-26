import React from 'react';

export default React.createContext({
  showModal: "false",
  showConfirmModal: "false",
  modalContent: "",
  confirmModalContent: "",
  setShowModal: () => {},
  setModalContent: () => {},
  setShowConfirmModal: () => {},
  setConfirmModalContent: () => {},
  onConfirmHandler: () => {},
  onCancelHandler: () => {}
});