import styled from "styled-components";

const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: block;
  border-radius: 3px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  padding: 0.5rem 0;
  margin: 0.5rem auto;
  width: 90%;
  background: ${(props) => {
    if (props.solid && props.bgColor) return props.bgColor;
    if(props.border) return "transparent";
    return "#ccc";
  }};
  color: ${(props) => props.color};
  border: ${(props) => {
    console.log(props);
    if (!props.solid) return props.border;
    return null;
  }}

  button:active {
    outline: none;
  }
    

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
`;

export default Button;
