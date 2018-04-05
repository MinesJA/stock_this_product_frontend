import { LOADING, ADD_PRODUCER, SELECT_PRODUCER } from '../actions/producersActions'


export default function Producers(state = {loading: false, producers: [], selectedProducer: null}, action) {
  switch(action.type) {

    case LOADING:
      return Object.assign({}, state, {loading: !state.loading})

    case ADD_PRODUCER:
      return Object.assign({}, state, {producers: [...state, action.payload]})

    case SELECT_PRODUCER:
      return Object.assign({}, state, {selectedProducer: action.payload})

    default:
      return {...state}
  }
}
