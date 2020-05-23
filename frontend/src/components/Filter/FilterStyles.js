import styled from 'styled-components';

const FilterStyles = styled.div`
  & > div {
    display: inline-block;
    text-align: center;
    width: 100%;
    padding: .5rem 1rem;
    border: 1px solid ${props => props.theme.bgColor};
    margin: .2rem 0;
    font-size: 1.2rem;
    border-radius: .2rem;
    position: relative;
  }

  & > div > ul {
    position: absolute;
    top: 2.6rem;
    left: 0;
    list-style: none;
    text-align: center;
    max-height: 0rem;
    overflow: hidden;
    transition: all .4s;
  }

  ul > li {
    padding: .5rem .6rem;
    margin: .2rem 0;
    border-radius: .2rem;
    cursor: pointer;
    background: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
  }

  li:first-child {
    margin-top: 0rem;
  }

  li:last-child {
    margin-bottom: 0rem;
  }

  & > div:hover > ul {
    max-height: 19rem;
    background: rgba(255, 255, 255, .7);
  }

  @media only screen and (max-width: 768px) {
    ul {
      width: 100%;
    }
  }
`

export default FilterStyles;