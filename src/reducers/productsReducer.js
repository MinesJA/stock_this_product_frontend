import { LOADING, ADD_PRODUCT, SELECT_PRODUCT } from '../actions/productsActions'


export default function Producers(state = {loading: false, products: [], selectedProducts: null}, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_PRODUCT:
      return Object.assign({}, state, {products: [...state, action.payload]})

    case SELECT_PRODUCT:
      return Object.assign({}, state, {selectedProducer: action.payload})

    default:
      return {...state}
  }
}
