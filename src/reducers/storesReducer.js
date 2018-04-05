import { LOADING, ADD_STORE, SELECT_STORE } from '../actions/storesActions'


export default function Stores(state = {loading: false, stores: [], selectedStore: null}, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_STORE:
      return Object.assign({}, state, {stores: [...state, action.payload]})

    case SELECT_STORE:
      return Object.assign({}, state, {selectedStore: action.payload})

    default:
      return {...state}
  }
}
