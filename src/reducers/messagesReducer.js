import { MESSAGE_LOADING, SEND_MESSAGE, EMAIL_STORE } from '../actions/messagesActions'

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
      return Object.assign({}, state, {messagesLoading: !state.loading})

    case SEND_MESSAGE:
      return Object.assign({}, state, {sendMessage: action.payload})

    case EMAIL_STORE:
      return Object.assign({}, state, {emailStore: action.payload})

    default:
      return {...state}
  }
}
