import { LOADING, ADD_STORE, SELECT_STORES } from '../actions/storesActions'


export default function Stores(state = {loading: false, stores: [], selectedStores: []}, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_STORE:
      return Object.assign({}, state, {stores: [...state, action.payload]})

    case SELECT_STORES:
      return Object.assign({}, state, {selectedStores: action.payload})

    default:
      return {...state}
  }
}
