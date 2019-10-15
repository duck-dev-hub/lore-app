import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import CarrinhoActions from '~/store/ducks/carrinho'
import Container from '~/components/UI/Container'
import TargetButton from '~/components/UI/TargetButton'
import {X} from '~/components/UI/Icons'
import {shadowMax} from '~/theme/shadow'

import {
  List,
  Product,
  Image,
  Section,
  Brand,
  Name,
  Price,
  Quantidade,
  Top,
  SubTotal,
  TotalLabel,
  TotalPrice,
  Target,
  FinalizarCompra,
  FinalizarText,
  VazioContainer,
  Vazio
} from './styles'

class Carrinho extends Component {
  _calcTotal = carrinho => {
    if (carrinho.length === 0) {
      return 0.0
    }

    const total = carrinho.reduce(
      (prev, cur) => parseFloat(cur.price * cur.amount + prev),
      0
    )

    return total
  }

  _setAmountProduct = (product, value) => {
    const {setAmountProduct} = this.props

    const amount = value === '' ? 0 : value

    setAmountProduct(product, Number(amount))
  }

  _removeProduct = product => {
    const {removeProduct} = this.props

    removeProduct(product)
  }

  render() {
    const {carrinho} = this.props
    const {_calcTotal, _setAmountProduct, _removeProduct} = this

    return (
      <Container>
        {carrinho.length > 0 ? (
          <List
            data={carrinho}
            keyExtractor={item => `#${item.id}${item.category_id}`}
            renderItem={({item}) => (
              <Product>
                <Image source={{uri: item.image}} />

                <Section>
                  <Brand>{item.brand}</Brand>
                  <Name>{item.name}</Name>
                  <Price>{item.price}</Price>
                </Section>

                <Quantidade
                  value={String(item.amount)}
                  onChangeText={value => _setAmountProduct(item, value)}
                  keyboardType="numeric"
                />
                <Top>
                  <TargetButton onPress={() => _removeProduct(item)}>
                    <X />
                  </TargetButton>
                </Top>
              </Product>
            )}
          />
        ) : (
          <VazioContainer>
            <Vazio>Seu carrinho está vazio</Vazio>
          </VazioContainer>
        )}
        <SubTotal>
          <TotalLabel>Total:</TotalLabel>
          <TotalPrice>R$ {_calcTotal(carrinho)}</TotalPrice>

          <Target>
            <FinalizarCompra style={shadowMax}>
              <FinalizarText>Finalizar compra</FinalizarText>
            </FinalizarCompra>
          </Target>
        </SubTotal>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho
})

const mapActionsToProps = dispatch =>
  bindActionCreators(CarrinhoActions, dispatch)

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Carrinho)
