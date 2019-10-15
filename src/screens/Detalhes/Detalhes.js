import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import CarrinhoActions from '~/store/ducks/carrinho'
import TargetButton from '~/components/UI/TargetButton'
import {shadowMax} from '~/theme/shadow'
import {Voltar} from '~/components/UI/Icons'
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
  _goBack = () => {
    const {navigation} = this.props

    navigation.goBack()
  }

  _addProduct = product => {
    const {addProduct} = this.props

    addProduct(product)

    alert('Produto adcionado ao carrinho')
  }

  render() {
    const {navigation} = this.props
    const {_goBack, _addProduct} = this

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
            <TargetButton onPress={() => _addProduct(product)}>
              <Buy style={shadowMax}>
                <BuyText>Adcionar ao carrinho</BuyText>
              </Buy>
            </TargetButton>
          </Section>

          <Section style={styles.absoluteTop}>
            <TargetButton onPress={_goBack}>
              <Voltar />
            </TargetButton>
          </Section>
        </Scroll>
      </Container>
    )
  }
}

const mapActionsToProps = dispatch =>
  bindActionCreators(CarrinhoActions, dispatch)

export default connect(
  null,
  mapActionsToProps
)(Detalhes)
