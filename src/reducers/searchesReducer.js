import { LOADING, SELECT_SEARCH, ADD_CENTER, ADD_RADIUS } from '../actions/searchesActions'

const initialState = {
  loading: false,
  center: {
    lat: null,
    long: null,
  },
  radius: null,
  selectedSearch: null}


export default function Searches(state = initialState, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_CENTER:
      return Object.assign({}, state, {center: action.payload})

    case ADD_RADIUS:
      return Object.assign({}, state, {radius: action.payload})

    case SELECT_SEARCH:
      return Object.assign({}, state, {selectedSearch: action.payload})

    default:
      return {...state}
  }
}
