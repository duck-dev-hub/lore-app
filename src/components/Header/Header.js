import React from 'react'
import {View} from 'react-native'

import {shadow} from '~/theme/shadow'

import {HeaderContainer, Title} from './styles'

const Header = ({scene}) => {
  const {route} = scene

  return (
    <HeaderContainer style={shadow}>
      <View />
      <Title>{route.routeName}</Title>
      <View />
    </HeaderContainer>
  )
}

export default Header
