import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Types e Actions
const {Types, Creators: CarrinhoActions} = createActions({
  addProduct: ['product'],
  setAmountProduct: ['productID', 'amount'],
  removeProduct: ['productID']
})

export const CarrinhoTypes = Types

export default CarrinhoActions

// Helper

const searchProduct = (carrinho, productID) => {
  const exist = carrinho.findIndex(product => product.id === productID)
  return exist !== -1
}

// Initial state, reducer, handlers
const INITIAL_STATE = Immutable({
  carrinho: []
})

const HANDLERS = {
  [CarrinhoTypes.ADD_PRODUCT]: (state, {product}) => {
    const {carrinho} = state

    const exist = searchProduct(carrinho, product.id)

    if (!exist) {
      return state.merge({
        carrinho: state.carrinho.push({...product, amount: 1})
      })
    }

    const newCarrinho = carrinho.map(prod => {
      if (prod.id === product.id) {
        return {...prod, amount: prod.amount++}
      }

      return prod
    })

    return state.merge({carrinho: newCarrinho})
  },

  [CarrinhoTypes.SET_AMOUNT_PRODUCT]: (state, {productID, amount}) => {
    const {carrinho} = state

    const exist = searchProduct(carrinho, productID)

    if (!exist) {
      return state
    }

    const newCarrinho = carrinho.map(prod => {
      if (prod.id === productID) {
        return {...prod, amount: Number(amount)}
      }

      return prod
    })

    return state.merge({carrinho: newCarrinho})
  },

  [CarrinhoTypes.REMOVE_PRODUCT]: (state, {productID}) => {
    const {carrinho} = state

    const exist = searchProduct(carrinho, productID)

    if (!exist) {
      return state
    }

    const newCarrinho = carrinho.filter(product => product.id !== productID)

    return state.merge({carrinho: newCarrinho})
  }
}

export const carrinhoReducer = createReducer(INITIAL_STATE, HANDLERS)
