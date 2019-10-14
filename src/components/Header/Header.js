import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  background-color: ${({theme}) => theme.hsl.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({theme}) => theme.metrics.max}px;
  height: 50px;
  align-self: stretch;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.hex.greyTransparent};
`
export const Title = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.hsl.darker};
  font-weight: bold;
  text-align: center;
`

const Header = ({scene}) => (
  <HeaderContainer>
    <View />
    <Title>{scene.route.routeName}</Title>
    <View />
  </HeaderContainer>
)

export default Header
