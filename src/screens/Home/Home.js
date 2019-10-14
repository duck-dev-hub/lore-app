import React, {Component} from 'react'

import Container from '~/components/UI/Container'
import ProductList from '~/components/ProductsList/ProductsList'
import api from '~/services/api'
import {Circle, CartIcon, BottomTarget} from '~/components/UI/Icons'

import tmp from './tmp'
import {shadow} from '~/theme/shadow'

class Home extends Component {
  state = {
    products: []
  }

  componentDidMount() {}

  async _getProducts() {
    const {data} = await api.get('/')

    this.setState({products: data})
  }

  render() {
    const {products} = this.state

    return (
      <Container>
        <ProductList data={tmp} />
        <BottomTarget>
          <Circle style={shadow}>
            <CartIcon />
          </Circle>
        </BottomTarget>
      </Container>
    )
  }
}

export default Home
