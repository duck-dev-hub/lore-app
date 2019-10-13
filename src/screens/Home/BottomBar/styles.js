import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  width: 100%;
  align-self: stretch;
  height: 60px;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 ${({theme}) => theme.metrics.max}px;
`
export const Circle = styled.View`
  height: 46px;
  width: 46px;
  border-radius: 23px;
  background-color: ${({theme}) => theme.hsl.orange};
  justify-content: center;
  align-items: center;
`
export const CartIcon = styled(Feather).attrs({
  name: 'shopping-bag',
  size: 16
})`
  color: ${({theme}) => theme.hsl.white};
  font-weight: normal;
`
