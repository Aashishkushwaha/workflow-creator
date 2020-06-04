import styled from 'styled-components';

export default styled.div`
  display: flex;
  height: calc(100vh - 3.65rem);
  align-items: center;
  justify-content: center;
  background: ${({theme}) => theme.bgColor};
  color: ${({theme}) => theme.color};
  padding: 0 2rem;

  div {
    text-align: center;

    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.8rem;
    }

    p {
      margin-top: .7rem;
      font-style: italic;
      font-size: 1.4rem;
    }
  }
`;