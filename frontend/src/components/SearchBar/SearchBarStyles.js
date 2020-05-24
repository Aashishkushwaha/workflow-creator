import styled from "styled-components";

const SerachBarStyles = styled.div`
  input {
    padding: 0.3rem 0.5rem;
    width: 100%;
    border: none;
    font: inherit;
    font-size: 1.2rem;
    border-bottom: 1px solid ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.bgColor};
  }

  input:focus {
    outline: none;
    box-shadow: 0 1px 0 0 ${(props) => props.theme.bgColor};
  }
`;

export default SerachBarStyles;
