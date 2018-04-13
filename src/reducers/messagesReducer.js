import { MESSAGE_LOADING, SEND_MESSAGE } from '../actions/messagesActions'

const initialState = {
  messagesLoading: false,
  messages: [],
  sendMessage: null,
  emailStore: null
}

// emailStore is the store customer wants to email


export default function Messages(state = initialState, action) {
  switch(action.type) {

    case MESSAGE_LOADING:
      return Object.assign({}, state, {messagesLoading: true})

    case SEND_MESSAGE:
      return Object.assign({}, state, {sendMessage: action.payload})

    default:
      return {...state}
  }
}
