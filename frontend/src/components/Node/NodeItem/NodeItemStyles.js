import styled from "styled-components";

export default styled.div`
  padding: 2rem 2rem 0.5rem;
  border: 1.5px solid ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  margin: 0.8rem 0.6rem;
  position: relative;

  .actions__button--right {
    position: absolute;
    content: "";
    top: -1.2rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: ${props => props.statusColor};
    box-shadow: 0 0 2px 1px ${(props) => props.theme.color};
    opacity: 0;
    transition: all 0.3s;
    z-index: 2;

    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }

  .actions__button--left {
    left: -1rem;
    background: dodgerblue;
    font-size: 1.8rem;
  }

  .actions__button--right {
    right: -1rem;
  }

  &:hover .actions__button--right {
    opacity: 1;
  }

  & > .input {
    padding: 0.3rem;
    width: 100%;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: .3rem;
    padding: .7rem .4rem  .3rem .7rem;

    &:invalid {
      border-color: red;
    }
  }

  & > div {
    display: flex;
    width: 100%;
    margin: 1rem 0;
    padding: 0rem;
    justify-content: space-between;
    align-items: center;
  }

  & > div > span:last-child {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: ${(props) => props.statusColor};
  }

  .text__container {
    resize: none;
    width: 100%;
    height: 20rem;
    padding: 0.5rem;
    // color: ${({ theme }) => theme.bgColor};
    color: #414141;
    font-size: 1.4rem;
  }

  .text__container:focus,
  .input:focus {
    outline: none;
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.2);
  }

  .node__connector {
    position: absolute;
    content: "";
    top: 50%;
    left: -3.4rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: ${props => props.theme.color};
    box-shadow: 0 0 2px 3px dodgerblue;
    transition: all 0.3s;
    z-index: 2;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  @media only screen and (max-width: 710px) {
    .node__connector {
      top: -3.65rem;
      left: 50%;
      transform: translateX(-50%) rotate(90deg);
    }
  }

`;
