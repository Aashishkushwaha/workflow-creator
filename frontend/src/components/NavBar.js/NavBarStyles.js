import styled from "styled-components";

const NavBarStyles = styled.header`

nav {
    padding: .8rem 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.bgColor}
  }

  h3 {
    font-size: 1.4rem;
    color: ${props => props.theme.color}
  }

  li {
    display: inline-block;
    font-size: 1.2rem;
    list-style: none;
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.color};
  }
`;

export default NavBarStyles;
