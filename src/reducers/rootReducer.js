import { combineReducers } from 'redux'
import Stores from './storesReducer'
import Producers from './producersReducer'
import Searches from './searchesReducer'
import Messages from './messagesReducer'
import Products from './productsReducer'

const rootReducer = combineReducers({
  Stores,
  Producers,
  Searches,
  Messages,
  Products
})


export default rootReducer
