import React from 'react'
import {View} from 'react-native'

import TargetButton from '~/components/UI/TargetButton'
import {shadowMax} from '~/theme/shadow'

import {Container, Circle, CartIcon} from './styles'

const BottomBar = () => (
  <Container>
    <View />
    <TargetButton>
      <Circle style={shadowMax}>
        <CartIcon />
      </Circle>
    </TargetButton>
  </Container>
)

export default BottomBar
