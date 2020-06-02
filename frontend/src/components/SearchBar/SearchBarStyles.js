import styled from "styled-components";

const SerachBarStyles = styled.div`
  input {
    padding: 0.5rem;
    border-radius: 0.3rem;
    width: 100%;
    font: inherit;
    font-size: 1.2rem;
    border: 1px solid ${(props) => props.theme.color};
    color: #414141;
  }

  input:focus {
    outline: none;
    box-shadow: 0 1px 0 0 ${(props) => props.theme.color};
  }
`;

export default SerachBarStyles;
