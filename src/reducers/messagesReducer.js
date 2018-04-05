import { LOADING, ADD_MESSAGE, SELECT_MESSAGE } from '../actions/messagesActions'


export default function Messages(state = {loading: false, products: [], selectedMessages: null}, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_MESSAGE:
      return Object.assign({}, state, {messages: [...state, action.payload]})

    case SELECT_MESSAGE:
      return Object.assign({}, state, {selectedMessage: action.payload})

    default:
      return {...state}
  }
}
