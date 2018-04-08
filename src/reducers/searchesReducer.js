import { SEARCHES_LOADING, SET_SEARCH } from '../actions/searchesActions'

const initialState = {
  searches_loading: false,
  searchObject: {},
  }


export default function Searches(state = initialState, action) {
  switch(action.type) {

    case SEARCHES_LOADING:
      return Object.assign({}, state, {searches_loading: !state.searches_loading})

    case SET_SEARCH:
      return Object.assign({}, state, {searchObject: action.payload})

    default:
      return {...state}
  }
}
