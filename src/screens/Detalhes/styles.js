import styled from 'styled-components/native'
import {Dimensions, StyleSheet} from 'react-native'

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 30
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  absoluteTop: {
    position: 'absolute',
    top: 20,
    left: 0
  }
})

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 10
  }
})`
  padding: 0 ${({theme}) => theme.metrics.max}px;
`

export const Section = styled.View`
  align-self: stretch;
  height: auto;
  margin-bottom: ${({theme}) => theme.metrics.max}px;
`
export const ImageContainer = styled.View`
  height: ${width - 42}px;
  width: ${width - 42}px;
  background-color: ${({theme}) => theme.hsl.white};
  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.metrics.radius}px;
`
export const Image = styled.Image.attrs({
  style: {
    resizeMode: 'stretch'
  }
})`
  height: ${width - 42}px;
  width: 50%;
`

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.darker};
  margin-bottom: ${({theme}) => theme.metrics.min / 2};
`

export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.purple};
  margin-bottom: ${({theme}) => theme.metrics.min / 2}px;
`

export const Brand = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.greyter};
  margin-bottom: ${({theme}) => theme.metrics.min / 2}px;
`

export const Buy = styled.View`
  align-self: stretch;
  height: 40px;
  background-color: ${({theme}) => theme.hsl.purple};
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.metrics.radius}px;
`

export const BuyText = styled.Text`
  text-align: center;
  text-transform: uppercase;
  color: ${({theme}) => theme.hsl.white};
  font-size: 14px;
  font-weight: bold;
`
