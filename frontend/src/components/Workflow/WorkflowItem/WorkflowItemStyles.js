import styled from 'styled-components';

const WorkflowItemStyles = styled.div`
  padding: 2rem 2rem .5rem;
  border: 1.5px solid ${props => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  margin: 0.8rem 0.6rem;
  position: relative;

  .actions__button--right,
  .actions__button--left {
    position: absolute;
    content: "";
    top: -1.2rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: tomato;
    box-shadow: 0 0 2px 1px ${props => props.theme.bgColor};
    opacity: 0;
    transition: all .3s;
    z-index: 2;

    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
  }

  .actions__button--left {
    left: -1rem;
    background: dodgerblue;
    font-size: 1.8rem;
  }

  .actions__button--right {
    right: -1rem;
  }

  &:hover .actions__button--right, 
  &:hover .actions__button--left {
    opacity: 1;
  }

  & > .input {
    padding: .3rem;
    width: 100%;
    font: inherit;
    border: 1px solid ${({theme}) => theme.bgColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > div {
    display: flex;
    width: 100%;
    margin: 1rem 0;
    padding: 0rem;
    justify-content: space-between;
    align-items: center;
  
    & > span:first-child {
      text-transform: uppercase;
    }
  }

  & > div > span:last-child {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: ${props => props.statusColor};
    box-shadow: 0 0 2px 2px ${props => props.theme.bgColor};
  }
`

export default WorkflowItemStyles;