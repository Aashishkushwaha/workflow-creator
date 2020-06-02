import styled from "styled-components";

const FilterStyles = styled.div`
  & > div {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: 0.5rem 3rem;
    border: 1px solid ${(props) => props.theme.bgColor};
    margin: 0.2rem 0;
    font-size: 1.2rem;
    border-radius: 0.2rem;
    position: relative;
  }

  .filter__indicator {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    top: 50%;
    right: 1rem;
    background: ${({ theme }) => theme.bgColor};
    box-shadow: 0 0 5px 1px black;
    transform: translateY(-50%);
  }

  & > div > ul {
    position: absolute;
    top: 2.6rem;
    left: 0;
    list-style: none;
    text-align: center;
    max-height: 0rem;
    overflow: hidden;
    transition: all 0.4s;
    z-index: 2;
  }

  ul > li {
    padding: 0.5rem 0.6rem;
    margin: 0.2rem 0;
    border-radius: 0.2rem;
    cursor: pointer;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    position: relative;
  }

  li:first-child {
    margin-top: 0rem;
  }

  li:last-child {
    margin-bottom: 0rem;
  }

  & > div:hover > ul {
    max-height: 19rem;
    background: rgba(255, 255, 255, 0.7);
  }

  @media only screen and (max-width: 768px) {
    ul {
      width: 100%;
    }
  }
`;

export default FilterStyles;
