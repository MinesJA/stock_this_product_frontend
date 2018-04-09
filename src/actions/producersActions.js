export const ADD_PRODUCER = 'ADD_PRODUCER'
export const LOADING = 'LOADING'
export const SELECT_PRODUCER = 'SELECT_PRODUCER'


export function setLoading(){
  return {
    type: LOADING
  }
}

export function addStore(producer){
  return {
    type: ADD_PRODUCER,
    payload: producer
  }
}

export function selectStore(producer){
  return {
    type: SELECT_PRODUCER,
    payload: producer
  }
}
