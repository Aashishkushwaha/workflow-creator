import styled from 'styled-components';

const SideDrawerStyles = styled.div`
  height: 100vh;
  width: 12rem;
  max-width: 90vw;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  position: absolute;
  z-index: 25;
  box-shadow: 1px 0 12px 0px #fff;

  ul {
    padding: 1.6rem 0;
  }

  li {
    display: block;
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
`;

export default SideDrawerStyles;
