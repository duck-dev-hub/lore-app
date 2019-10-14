import React, {Component} from 'react'

import Container from '~/components/UI/Container'

import TargetButton from '~/components/UI/TargetButton'
import {shadowMax} from '~/theme/shadow'
import {CircleLine, Voltar} from '~/components/UI/Icons'

import {
  Section,
  ImageContainer,
  Image,
  Brand,
  Name,
  Price,
  Buy,
  BuyText,
  styles
} from './styles.js'

class Detalhes extends Component {
  goBack = () => {
    const {navigation} = this.props

    navigation.goBack()
  }

  render() {
    const {navigation} = this.props
    const {goBack} = this

    const product = navigation.getParam('product')

    return (
      <Container>
        <Section>
          <ImageContainer>
            <Image source={{uri: product.image}} />
          </ImageContainer>
        </Section>

        <Section>
          <Brand>{product.brand}</Brand>
          <Name>{product.name}</Name>
          <Price>{product.price}</Price>
        </Section>

        <Section style={styles.marginBottom}>
          <TargetButton>
            <Buy style={shadowMax}>
              <BuyText>Adcionar ao carrinho</BuyText>
            </Buy>
          </TargetButton>
        </Section>

        <Section style={styles.center}>
          <TargetButton onPress={goBack}>
            <CircleLine>
              <Voltar />
            </CircleLine>
          </TargetButton>
        </Section>
      </Container>
    )
  }
}

export default Detalhes
