import styled from "styled-components";

export default styled.input`
  display: block;
  width: 100%;
  margin: 0.3rem 0;
  font: inherit;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  border: 1px solid ${({theme}) => theme.color};
  font-size: 1.4rem;

  &:focus {
    outline: none;
    box-shadow: 0 2px 2px 0px ${({theme}) => theme.color};
  }
`;
