import styled from "styled-components";

const ModalStyles = styled.div`
  .modal {
    // transition: all 0.4s;
    // position: absolute;
    // max-width: 90vw;
    // padding: 1.2rem 2rem;
    // top: -50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // border-radius: 0.4rem;
    // background: #fff;
    // color: #414141;
    // z-index: 10;
    // font-size: 1rem;

    background: #fff;
    z-index: 12;
    padding: 1.2rem 2rem;
    position: absolute;
    top: -50%;
    left: 50%;
    max-width: 90vw;
    transform: translate(-50%, -50%);
    border-radius: 0.4rem;
    transition: all 0.4s;
    color: #414141;
    z-index: 10;
    font-size: 1rem;
  }

  .showModal {
    top: 50%;
    animation: bounce 0.5s backwards;
  }

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
    background: ${(props) => props.theme.bgColor};
    transition: color 0.4s, transform 0.2s;
  }

  .modalClose:hover {
    color: red;
    transform: scale(1.1);
    cursor: pointer;
  }

  @keyframes bounce {
    0% {
      top: -50%;
    }

    40% {
      top: 60%;
    }

    50% {
      top: 45%;
    }

    60% {
      top: 55%;
    }

    70% {
      top: 50%;
    }

    90% {
      top: 52%;
    }

    100% {
      top: 50%;
    }
  }
`;

export default ModalStyles;
