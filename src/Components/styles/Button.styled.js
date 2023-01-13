import styled from "styled-components";
// import { TomatoButton } from "./Container.styled";

export const Button = styled.button`
  background: ${props => props.prime ? 'red' : 'transparent'};
  color: ${props => props.prime ? 'white' : 'red'};
  /* color: ${({ theme }) => theme.colors.prime}; */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 2em;
  border: 2px solid palevioletred;
  border-radius: 100px;
  cursor: pointer;
  display: block;

  &:hover {
      /* opacity: 0.98;
      transition: scale(0.85); */
      background: cadetblue;
      color: black;
  }
`

// INHERITANCE 
export const TomatoButton = styled(Button)`
  background: green;
  color: #fff;
  padding: 0.5em 3em;
  border-radius: 100px;
`