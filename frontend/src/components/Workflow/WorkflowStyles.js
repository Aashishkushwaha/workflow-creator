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

  .controllers {
    display: flex;
    justify-content: flex-end;
    width: 40%;
  }

  .operations__container > .controllers > * {
    margin: 0 0.2rem;
  }

  .workflow__container {
    display: grid;
    margin: 1rem;
    grid-template-columns: repeat( auto-fill, minmax(18rem, 1fr) );
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    .operations__container {
      flex-direction: column;
    }

    .controllers {
      flex-direction: column;
      width: 75%;
    }

    .operations__container > div:first-child {
      width: 75%;
      flex-direction: column;
    }

    .operations__container > .controllers > * {
      margin: 0.2rem;
    }
  }
`;
