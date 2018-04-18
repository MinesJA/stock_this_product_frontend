export const STORE_LOADING = 'STORE_LOADING'
export const SELECT_STORES = 'SELECT_STORES'
export const MESSAGE_STORE = 'MESSAGE_STORE'
export const SET_WON_STORES = 'SET_WON_STORES'
export const SET_PROSPECT_STORES = 'SET_PROSPECT_STORES'

export function storesLoading(){
  return {
    type: STORE_LOADING
  }
}

export function selectStores(stores){
  return {
    type: SELECT_STORES,
    payload: stores
  }
}

export function messageStore(store_id){
  return {
    type: MESSAGE_STORE,
    payload: store_id
  }
}


export function fetchStores(producer_id){

  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/stores/${producer_id}`)
      .then(resp => resp.json())
      .then(result => {

        dispatch({
          type: SET_WON_STORES,
          payload: result.wonStores
        })

        dispatch({
          type: SET_PROSPECT_STORES,
          payload: result.prospectStores
        })

      })
  }
}


export function postStores(csv, buys, user){
  let formData = new FormData();
  formData.append('file', csv);
  formData.append('buys', buys)

  let options = {
    method: 'POST',
    headers: {"Authorization": localStorage.getItem("token")},
    body: formData
  }

  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/csvs`, options)
      .then(resp => resp.json())
      .then(result => {

        alert(result.message)

      })
  }
}
