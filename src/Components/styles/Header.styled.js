import styled from "styled-components";
 
export const StyledHeader = styled.header `
  /* background-color: ${(props) => props.bg};
  background-color: ${({ bg }) => bg}; */
  background-color: ${({ theme }) =>  theme.colors.header};
  padding: 40px 0;


  //  nested 
  h1{
    color: red;
  }

  &:hover{
    background-color: cadetblue;
  }
`