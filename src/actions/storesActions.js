export const ADD_STORE = 'ADD_STORE'
export const STORE_LOADING = 'STORE_LOADING'
export const SELECT_STORES = 'SELECT_STORES'

export function setStoreLoading(){
  return {
    type: STORE_LOADING
  }
}

export function addStore(store){
  return {
    type: ADD_STORE,
    payload: store
  }
}

export function selectStores(stores){
  return {
    type: SELECT_STORES,
    payload: stores
  }
}

export function fetchStores(searchObject){

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "stores":
        {
          "latitude": searchObject.lat,
          "longitude": searchObject.lng,
          "radius": searchObject.radius
        }
    })
  }

  return(dispatch) => {
    dispatch({
      type: STORE_LOADING
    })
    fetch(`http://localhost:3000/api/v1/stores/fetchnear`, options)
      .then(resp => resp.json())
      .then(result => {

        dispatch({
          type: SELECT_STORES,
          payload: result
        })

        dispatch({
          type: STORE_LOADING
        })
    })
  }
}









// export function fetchTools(){
//   return (dispatch) => {
//     dispatch({
//       type: LOADING
//     })
//
//     return fetch('http://localhost:3000/api/v1/tools')
//     .then(resp => resp.json())
//     .then(result => {
//       // When do I set loading back to false?
//
//
//
//       let payload = result.data.map((obj)=>{ return Object.assign(
//         {}, {id: obj.id}, obj.attributes ) } )
//
//
//       dispatch({
//       type: LOAD_TOOLS,
//       payload
//       })
//     })
//   }
// }

// export function addTool(tool){
//   let options ={
//     method: "PATCH",
//     headers:
//       {Accept: 'application/json',
//        'Content-Type': 'application/json'},
//     body:
//       JSON.stringify({
//       name: tool.name,
//       description: tool.description,
//       url: tool.url,
//       tags: tool.tags
//     })
//   }
//
//   return (dispatch) => {
//     return fetch(`http://localhost:3000/api/v1/tools/${tool.id}`, options)
//     .then(resp => resp.json())
//     .then(result => {
//       dispatch({
//         type: 'ADD_TOOL',
//         payload: result
//       })
//     })
//   }
//
// }
