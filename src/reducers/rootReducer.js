import { combineReducers } from 'redux'
import Stores from './storesReducer'
import Producers from './producersReducer'
import Searches from './searchesReducer'
import Messages from './messagesReducer'
import Users from './usersReducer'

const rootReducer = combineReducers({
  Stores,
  Producers,
  Searches,
  Messages,
  Users
})


export default rootReducer
