import { USER_LOADING, GET_USER, LOG_OUT } from '../actions/usersActions'

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

    case GET_USER:
      return Object.assign(
        {},
        state,
        {currentUser: action.payload, loggedIn: true, userLoading: false}
      )

    case LOG_OUT:
      return Object.assign(
        {},
        state,
        {currentUser: null, loggedIn: false, userLoading: false}
      )

    default:
      return {...state}
  }
}
