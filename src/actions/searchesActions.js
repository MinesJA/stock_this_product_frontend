export const ADD_SEARCH = 'ADD_SEARCH'
export const LOADING = 'LOADING'
export const SELECT_SEARCH = 'SELECT_SEARCH'


export function setLoading(){
  return {
    type: LOADING
  }
}

export function addSearch(search){
  return {
    type: ADD_SEARCH,
    payload: search
  }
}

export function selectSearch(search){
  return {
    type: SELECT_SEARCH,
    payload: search
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
