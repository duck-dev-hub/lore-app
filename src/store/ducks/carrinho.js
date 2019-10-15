import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types e Actions
const {Types, Creators: CarrinhoActions} = createActions({
  addProduct: ['product'],
  setAmountProduct: ['product', 'amount'],
  removeProduct: ['product']
})

export const CarrinhoTypes = Types

export default CarrinhoActions

// Helper

const searchProduct = (carrinho, productID, categoryId) => {
  const exist = carrinho.findIndex(product => {
    return product.id === productID && product.category_id === categoryId
  })
  return exist !== -1
}

// Initial state, reducer, handlers
const INITIAL_STATE = Immutable({
  carrinho: []
})

const HANDLERS = {
  [CarrinhoTypes.ADD_PRODUCT]: (state, {product}) => {
    const {carrinho} = state

    const exist = searchProduct(carrinho, product.id, product.category_id)

    if (!exist) {
      return state.merge({
        carrinho: [...state.carrinho, {...product, amount: 1}]
      })
    }

    const newCarrinho = carrinho.map(prod => {
      if (prod.id === product.id && prod.category_id === product.category_id) {
        return {...prod, amount: prod.amount + 1}
      }

      return prod
    })

    return state.merge({carrinho: newCarrinho})
  },

  [CarrinhoTypes.SET_AMOUNT_PRODUCT]: (state, {product, amount}) => {
    const {carrinho} = state

    const exist = searchProduct(carrinho, product.id, product.category_id)

    if (!exist) {
      return state
    }

    const newCarrinho = carrinho.map(prod => {
      if (prod.id === product.id && prod.category_id === product.category_id) {
        return {...prod, amount: amount}
      }

      return prod
    })

    return state.merge({carrinho: newCarrinho})
  },

  [CarrinhoTypes.REMOVE_PRODUCT]: (state, {product}) => {
    const {carrinho} = state

    const exist = searchProduct(carrinho, product.id, product.category_id)

    if (!exist) {
      return state
    }

    const newCarrinho = carrinho.filter(
      prod => prod.id !== product.id || prod.category_id !== product.category_id
    )

    console.tron.log(newCarrinho)

    return state.merge({carrinho: newCarrinho})
  }
}

export const carrinhoReducer = createReducer(INITIAL_STATE, HANDLERS)
