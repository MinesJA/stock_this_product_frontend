import { SET_SEARCH, SEARCHES_LOADING } from '../actions/searchesActions'

const initialState = {
  searchesLoading: false,
  searchObject: {},
  }


export default function Searches(state = initialState, action) {
  switch(action.type) {

    case SEARCHES_LOADING:
      return Object.assign(
        {},
        state,
        {searchesLoading: true}
      )

    case SET_SEARCH:
      return Object.assign(
        {},
        state,
        {searchObject: action.payload,
         searchesLoading: false}
       )

    default:
      return {...state}
  }
}
