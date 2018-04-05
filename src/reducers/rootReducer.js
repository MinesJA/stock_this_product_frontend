import { combineReducers } from 'redux'
import Stores from './storesReducer'
import Producers from './producersReducer'
import Searches from './searchesReducer'
import Messages from './messagesReducer'
import Products from './productsReducer'

const stockApp = combineReducers({
  Stores,
  Producers,
  Searches,
  Messages,
  Products
})


export default stockApp
