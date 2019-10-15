import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ShopActions from '~/store/ducks/shop'
import Container from '~/components/UI/Container'
import ProductList from '~/components/ProductsList/ProductsList'
import api from '~/services/api'
import {Circle, CartIcon, BottomTarget} from '~/components/UI/Icons'
import Loading from '~/components/UI/Loading'

import {shadow} from '~/theme/shadow'

class Shop extends Component {
  componentDidMount() {
    const {requestProducts, requestCategories} = this.props
    requestCategories()
    requestProducts(0)
  }

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
    const {products, loading} = this.props
    const {handleChoseProduct, goCarrinho} = this

    return (
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {products.length > 0 && (
              <ProductList
                data={products}
                pressInProduct={handleChoseProduct}
              />
            )}
          </Fragment>
        )}
        <BottomTarget onPress={goCarrinho}>
          <Circle style={shadow}>
            <CartIcon />
          </Circle>
        </BottomTarget>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  products: state.shop.products,
  loading: state.shop.loading
})

const mapActionsToProps = dispatch => bindActionCreators(ShopActions, dispatch)

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Shop)
