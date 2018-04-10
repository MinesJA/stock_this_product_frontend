import { USER_LOADING, ADD_USER, SIGN_UP } from '../actions/usersActions'

const initialState = {
  userLoading: false,
  currentUser: null,
  loggedIn: false,
  users: []
  }

export default function Users(state = initialState, action) {
  switch(action.type) {

    case USER_LOADING:
      return Object.assign(
        {},
        state,
        {userLoading: true}
      )

    case ADD_USER:
      return Object.assign(
        {},
        state,
        {stores: [...state, action.payload],
         userLoading: false}
      )

    case SIGN_UP:
      return {...state, currentUser: action.payload, loggedIn: true}

    default:
      return {...state}
  }
}
