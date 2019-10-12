import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather'

export const Voltar = styled(Feather).attrs({
  name: 'arrow-left',
  size: 14
})`
  color: ${({theme}) => theme.hsl.darker};
`
