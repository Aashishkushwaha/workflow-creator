import styled from "styled-components";

export default styled.div`
  .operations__container {
    padding: 0.8rem 1.4rem;
    /* width: 95vw; */
    margin: 0 auto;
    border-bottom: 1.5px solid #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .operations__container > div:first-child {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
  }

  .operations__container > div > * {
    margin: 0.2rem;
  }

  .operations__container > div > input {
    padding: 0.5rem;
    width: 100%;
    border: none;
    border-radius: 3px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.bgColor};
    border-bottom: 1px solid ${(props) => props.theme.bgColor};
  }

  .operations__container > div > input:focus {
    outline: none;
    box-shadow: 0 2px 1px 0px rgba(0,0,0,0.2);
  }

  .controllers {
    display: flex;
    justify-content: flex-end;
    width: 40%;
  }

  .operations__container > .controllers > * {
    margin: 0 0.2rem;
  }
`;
