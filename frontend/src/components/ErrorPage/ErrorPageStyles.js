import styled from "styled-components";

export default styled.div`
  display: flex;
  height: calc(100vh - 3.65rem);
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.color};
  padding: 0 2rem;

  h1 {
    font-size: 3rem;

    & span {
      color: red;
    }
  }

  }
`;
