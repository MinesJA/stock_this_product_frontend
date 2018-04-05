import { LOADING, ADD_SEARCH, SELECT_SEARCH } from '../actions/searchesActions'


export default function Searches(state = {loading: false, searches: [], selectedSearch: null}, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_SEARCH:
      return Object.assign({}, state, {searches: [...state, action.payload]})

    case SELECT_SEARCH:
      return Object.assign({}, state, {selectedSearch: action.payload})

    default:
      return {...state}
  }
}
