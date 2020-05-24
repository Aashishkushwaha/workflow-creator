import styled from "styled-components";

const NavBarStyles = styled.header`
  
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  
  nav {
    padding: 0.8rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme.bgColor};
  }

  .hamberger__wrapper {
    cursor: pointer;
    height: 1.7rem;
    width: 2.5rem;
    position: absolute;
    left: 1rem;
    visibility: hidden;
  }

  .hamberger {
    display: none;
  }

  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.color};
    text-shadow: 2px 2px 5px #03a9f4;
  }

  li {
    display: inline-block;
    font-size: 1.2rem;
    list-style: none;
    padding: 0rem 1rem;
  }

  a {
    display: inline-block;
    height: 100%;
    padding: 0.3rem;
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }

  @media screen and (max-width: 768px) {
    nav {
      flex-direction: column;
      text-align: center;
    }

    ul {
      display: none;
    }

    li {
      display: block;
    }

    li:not(:last-child) {
      padding-bottom: 0.3rem;
      border-bottom: 2px solid ${(props) => props.theme.color};
    }

    .hamberger__wrapper {
      visibility: visible;
    }

    .hamberger {
      display: block;
      height: 0.35rem;
      width: 2rem;
      background: white;
      border-radius: 4rem;
      position: absolute;
      left: 0rem;
      top: 0.69rem;
      cursor: inherit;

      &::before,
      &::after {
        content: "";
        position: absolute;
        background: inherit;
        top: -0.5rem;
        left: 0rem;
        height: 100%;
        border-radius: inherit;
        cursor: inherit;
      }

      &::before {
        width: 75%;
      }

      &::after {
        width: 125%;
        top: 0.5rem;
      }
    }
  }
`;

export default NavBarStyles;
