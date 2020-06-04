import styled from "styled-components";

export default styled.div`
  position: absolute;
  padding: 1rem;
  padding-right: .4rem;
  border-radius: .7rem;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  
  .lds-ripple {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid ${({ theme }) => theme.color};
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
