import { STORE_LOADING, SELECT_STORES, MESSAGE_STORE, SET_WON_STORES, SET_PROSPECT_STORES } from '../actions/storesActions'

const initialState = {
  storesLoading: false,
  wonStores: [],
  prospectStores: [],
  selectedStores: [],
  messageStore: "",
  }

export default function Stores(state = initialState, action) {
  switch(action.type) {

    case STORE_LOADING:
      return Object.assign(
        {},
        state,
        {storesLoading: true}
      )

    case SELECT_STORES:
      return Object.assign(
        {},
        state,
        {selectedStores: action.payload,
         storesLoading: false}
       )

    case MESSAGE_STORE:
      return Object.assign(
        {},
        state,
        {messageStore: action.payload}
      )

    case SET_WON_STORES:
      return Object.assign(
        {},
        state,
        {wonStores: action.payload}
      )

    case SET_PROSPECT_STORES:
      return Object.assign(
        {},
        state,
        {prospectStores: action.payload}
      )

    default:
      return {...state}
  }
}
