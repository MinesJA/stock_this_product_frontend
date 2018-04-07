export const ADD_STORE = 'ADD_STORE'
export const LOADING = 'LOADING'
export const SELECT_STORES = 'SELECT_STORES'
export const FETCH_NEAR = 'FETCH_NEAR'


export function setLoading(){
  return {
    type: LOADING
  }
}

export function addStore(store){
  return {
    type: ADD_STORE,
    payload: store
  }
}

export function selectStores(store){
  return {
    type: SELECT_STORES,
    payload: store
  }
}

export function fetchNear(searchObject){
  return (dispatch) => {

    dispatch({
      type: LOADING
    })

    let options = {
      method: "POST",
      headers: {Accept: 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        "stores": searchObject
      })
    }

    return fetch(`http://localhost:3000/api/v1/stores/fetchnear`, options)
      .then(resp => resp.json())
      .then(result => {
        dispatch({
          type: SELECT_STORES,
          payload: result
        })
        dispatch({
          type: LOADING
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
