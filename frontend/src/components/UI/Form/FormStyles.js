import styled from "styled-components";

const FormStyles = styled.form`
    max-width: 90%;
    width: 30rem;
    margin: 0 auto;
    border: 1px solid ${props => props.theme.bgColor};
    padding: 1rem;
    position: absolute;
    background: ${props => props.theme.bgColor};
    border-radius: 0.5rem;
    top: 50%;
    left: 50%;
    color: ${props => props.theme.color};
    transform: translate(-50%, -50%);
    font-size: 1.2rem;

  h2 {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    text-transform: none;
    text-decoration: none;
    color: ${props => props.theme.color};
  }

  .formGroup {
    width: 90%;
    margin: 0.6rem auto;
  }

  .formGroup > input,
  label {
    display: block;
    width: 100%;
    margin: 0.3rem 0;
    font: inherit;
  }

  .passwordGroup {
    position: relative; //👁
  }

  .passwordGroup > input {
    padding-right: 2rem;
  }

  .password__viewer {
    position: absolute;
    top: 2.05rem;
    right: .3rem;
    font-size: 1rem;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;


export default FormStyles;