import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props =>
    props.theme.mode === 'light' ? 'white' : 'black'};
  color: ${props => (props.theme.mode === 'light' ? 'black' : 'white')};
`
