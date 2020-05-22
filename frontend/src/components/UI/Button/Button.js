import styled from "styled-components";

const Button = styled.button`
  display: block;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  padding: 0.8rem 0;
  margin: 0.5rem auto;
  width: 100%;
  cursor: pointer;
  background: ${(props) => {
    if (props.solid && props.bgColor) return props.bgColor;
    if(props.border) return "transparent";
    return "#ccc";
  }};
  color: ${(props) => props.color};
  border: ${(props) => {
    if (!props.solid) return props.border;
    return null;
  }}

  button:active {
    outline: none;
  }
`;

export default Button;
