import styled from "styled-components";

const ModalStyles = styled.div`
  position: absolute;
  max-width: 90vw;
  padding: 1.2rem 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.4rem;
  background: #fff;
  color: #414141;
  z-index: 10;
  font-size: 1rem;

  .modalClose {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    height: 2rem;
    width: 2rem;
    top: -1rem;
    right: -1rem;
    border-radius: 50%;
    background: ${props => props.theme.bgColor};
    transition: color 0.4s, transform 0.2s;
  }

  .modalClose:hover {
    color: red;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default ModalStyles;
