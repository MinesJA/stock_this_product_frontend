export const ADD_MESSAGE = 'ADD_MESSAGE'
export const LOADING = 'LOADING'
export const SELECT_MESSAGE = 'SELECT_MESSAGE'


export function setLoading(){
  return {
    type: LOADING
  }
}

export function addMessage(message){
  return {
    type: ADD_MESSAGE,
    payload: message
  }
}

export function selectMessage(message){
  return {
    type: SELECT_MESSAGE,
    payload: message
  }
}
