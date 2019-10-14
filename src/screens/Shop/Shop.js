import React, {Component} from 'react'

import Container from '~/components/UI/Container'
import ProductList from '~/components/ProductsList/ProductsList'
import api from '~/services/api'
import {Circle, CartIcon, BottomTarget} from '~/components/UI/Icons'

import tmp from './tmp'
import {shadow} from '~/theme/shadow'

class Shop extends Component {
  state = {
    products: []
  }

  componentDidMount() {}

  async _getProducts() {
    const {data} = await api.get('/')

    this.setState({products: data})
  }

  handleChoseProduct = product => {
    const {navigation} = this.props

    navigation.navigate('Detalhes', {product})
  }

  goCarrinho = () => {
    const {navigation} = this.props

    navigation.navigate('Carrinho')
  }

  render() {
    const {products} = this.state // estatico ainda
    const {handleChoseProduct, goCarrinho} = this

    return (
      <Container>
        <ProductList data={tmp} pressInProduct={handleChoseProduct} />
        <BottomTarget onPress={goCarrinho}>
          <Circle style={shadow}>
            <CartIcon />
          </Circle>
        </BottomTarget>
      </Container>
    )
  }
}

export default Shop
