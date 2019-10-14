import styled from 'styled-components/native'
import TargetButton from '~/components/UI/TargetButton'

export const List = styled.FlatList`
  flex: 1;
  padding: 0 ${({theme}) => theme.metrics.max}px;
`

export const Product = styled.View`
  align-self: stretch;
  flex-direction: row;
  margin-bottom: ${({theme}) => theme.metrics.min}px;
  border-radius: ${({theme}) => theme.metrics.radius}px;
  background-color: ${({theme}) => theme.hsl.white};
  padding: ${({theme}) => theme.metrics.min}px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({theme}) => theme.hex.greyTransparent};
`
export const Image = styled.Image.attrs({
  style: {
    resizeMode: 'stretch'
  }
})`
  height: 50px;
  width: 50px;
  margin-right: ${({theme}) => theme.metrics.min}px;
  border-radius: ${({theme}) => theme.metrics.radius}px;
`

export const Section = styled.View`
  align-self: stretch;
  margin-right: ${({theme}) => theme.metrics.min}px;
`

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.darker};
  margin-bottom: ${({theme}) => theme.metrics.min / 2}px;
`

export const Price = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.purple};
`
export const Brand = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.greyter};
  margin-bottom: ${({theme}) => theme.metrics.min / 2}px;
`

export const Quantidade = styled.TextInput`
  padding: ${({theme}) => theme.metrics.min}px;
  width: 40px;
  border-radius: ${({theme}) => theme.metrics.radius}px;
  border: 1px solid ${({theme}) => theme.hex.greyTransparent};
`
export const Top = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const TotalLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.darker};
  margin-bottom: ${({theme}) => theme.metrics.min / 2}px;
`
export const TotalPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.purple};
  margin-bottom: ${({theme}) => theme.metrics.min / 2}px;
`
export const SubTotal = styled.View`
  align-self: stretch;
  background-color: ${({theme}) => theme.hsl.white};
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.hex.greyTransparent};
  justify-content: center;
  padding: ${({theme}) => theme.metrics.min}px;
`
export const Target = styled(TargetButton)`
  align-self: stretch;
`

export const FinalizarCompra = styled.View`
  height: 40px;
  align-items: stretch;
  width: 100%;
  background-color: ${({theme}) => theme.hsl.purple};
  border-radius: ${({theme}) => theme.metrics.radius}px;
  justify-content: center;
  align-items: center;
`
export const FinalizarText = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.hsl.white};
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`
