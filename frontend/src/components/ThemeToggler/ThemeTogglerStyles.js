import styled from "styled-components";

const ThemeTogglerStyles = styled.div `
  .themeToggler {
    position: absolute;
    bottom: 3rem;
    right: 2rem;
    width: 4rem;
    height: 1.4rem;
    border-radius: 1rem;
    background: #000;
  }

  .themeToggler > span {
    content: "";
    position: absolute;
    padding: .5rem;
    margin: 0 .2rem;
    height: 80%;
    width: 10%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background: white;
    transition: all .4s;
  }
`

export default ThemeTogglerStyles;