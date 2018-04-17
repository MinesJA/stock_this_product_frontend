import { PRODUCER_LOADING, FETCH_PRODUCERS, SELECT_PRODUCER } from '../actions/producersActions'

const initialState = {
  producersLoading: false,
  producers: [],
  selectedProducer: 1,
  attemptedLoading: false
}



export default function Producers(state = initialState, action) {
  switch(action.type) {

    case PRODUCER_LOADING:
      return Object.assign({}, state, {producersLoading: true, attemptedLoading: true})

    case FETCH_PRODUCERS:
      return Object.assign({}, state, {producers: action.payload, producersLoading: false})

    case SELECT_PRODUCER:
      return Object.assign({}, state, {selectedProducer: action.payload})

    default:
      return {...state}
  }
}
