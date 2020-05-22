import React from 'react';

export default React.createContext({
  showModal: "false",
  modalContent: "",
  setShowModal: () => {},
  setModalContent: () => {}
});