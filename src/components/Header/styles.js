import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  background-color: ${({theme}) => theme.hsl.whiter};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({theme}) => theme.metrics.max}px;
  height: 50px;
  align-self: stretch;
`
export const Title = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({theme}) => theme.hsl.darker};
  font-weight: bold;
  text-align: center;
`
