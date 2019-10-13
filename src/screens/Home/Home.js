import React, {Component} from 'react'

import Container from '~/components/UI/Container'
import ProductList from '~/components/ProductsList/ProductsList'

import tmp from './tmp'
import BottomBar from './BottomBar/BottomBar'

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
        <BottomBar />
      </Container>
    )
  }
}

export default Home
