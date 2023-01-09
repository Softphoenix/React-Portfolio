
import styled from "styled-components"



export const Container = styled.div`
    width: 200px;
    max-width: 100%;
    padding: 2px 5px;
    border-radius: 100px;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  display: block    ;
`