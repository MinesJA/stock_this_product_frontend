export const ADD_PRODUCT = 'ADD_PRODUCT'
export const LOADING = 'LOADING'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'


export function setLoading(){
  return {
    type: LOADING
  }
}

export function addProduct(product){
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

export function selectProduct(product){
  return {
    type: SELECT_PRODUCT,
    payload: product
  }
}
