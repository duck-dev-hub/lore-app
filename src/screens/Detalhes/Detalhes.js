import React, {Component} from 'react'

import TargetButton from '~/components/UI/TargetButton'
import {shadowMax} from '~/theme/shadow'
import {CircleLine, Voltar} from '~/components/UI/Icons'
import Container from '~/components/UI/Container'

import {
  Scroll,
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
        <Scroll>
          <Section>
            <ImageContainer>
              <Image source={{uri: product.image}} />
            </ImageContainer>
          </Section>

          <Section>
            <Brand>{product.brand}</Brand>
            <Name>{product.name}</Name>
            <Price>R$ {product.price}</Price>
          </Section>

          <Section>
            <TargetButton>
              <Buy style={shadowMax}>
                <BuyText>Adcionar ao carrinho</BuyText>
              </Buy>
            </TargetButton>
          </Section>

          <Section style={styles.absoluteTop}>
            <TargetButton onPress={goBack}>
              <Voltar />
            </TargetButton>
          </Section>
        </Scroll>
      </Container>
    )
  }
}

export default Detalhes
