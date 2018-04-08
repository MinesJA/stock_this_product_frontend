import { STORE_LOADING, ADD_STORE, SELECT_STORES } from '../actions/storesActions'


export default function Stores(state = {store_loading: false, stores: [], selectedStores: []}, action) {
  switch(action.type) {

    case STORE_LOADING:
      return Object.assign({}, state, {store_loading: !state.store_loading})

    case ADD_STORE:
      return Object.assign({}, state, {stores: [...state, action.payload]})

    case SELECT_STORES:
      return Object.assign({}, state, {selectedStores: action.payload})

    default:
      return {...state}
  }
}
