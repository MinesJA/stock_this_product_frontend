import { STORE_LOADING, ADD_STORE, SELECT_STORES, MESSAGE_STORE } from '../actions/storesActions'

const initialState = {
  storesLoading: false,
  stores: [],
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

    case ADD_STORE:
      return Object.assign(
        {},
        state,
        {stores: [...state, action.payload],
         storesLoading: false}
      )

    case SELECT_STORES:
      return Object.assign(
        {},
        state,
        {selectedStores: action.payload,
         storesLoading: false}
       )

    case MESSAGE_STORE:
      console.log(action.payload)
      return Object.assign(
        {},
        state,
        {messageStore: action.payload}
      )

    default:
      return {...state}
  }
}
