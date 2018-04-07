export const ADD_CENTER = 'ADD_CENTER'
export const ADD_RADIUS = 'ADD_RADIUS'
export const LOADING = 'LOADING'
export const SELECT_SEARCH = 'SELECT_SEARCH'


export function setLoading(){
  return {
    type: LOADING
  }
}

export function addCenter(centerObj){
  return {
    type: ADD_CENTER,
    payload: centerObj
  }
}

export function addRadius(radius){
  return {
    type: ADD_RADIUS,
    payload: radius
  }
}

export function selectSearch(search){
  return {
    type: SELECT_SEARCH,
    payload: search
  }
}

export function fetchGeocode(searchTerms){
  return (dispatch) => {

    dispatch({
      type: LOADING
    })

    dispatch({
      type: ADD_RADIUS,
      payload: searchTerms.radius
    })

  console.log("Hi fetch")
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerms.location}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`)
    .then(resp => resp.json())
    .then(result => {
      let object = {}
      object["lat"] = result.results[0].geometry.location.lat
      object["long"] = result.results[0].geometry.location.lng

      dispatch({
        type: 'ADD_CENTER',
        payload: object
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
