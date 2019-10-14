import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

import TargetButton from '~/components/UI/TargetButton'

export const Voltar = styled(Feather).attrs({
  name: 'arrow-left',
  size: 14
})`
  color: ${({theme}) => theme.hsl.darker};
`
export const Circle = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${({theme}) => theme.hsl.pink};
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
export const BottomTarget = styled(TargetButton)`
  position: absolute;
  bottom: ${({theme}) => theme.metrics.max}px;
  right: ${({theme}) => theme.metrics.max}px;
`
