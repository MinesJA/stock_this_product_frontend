export const SET_SEARCH = 'SET_SEARCH'
export const SEARCHES_LOADING = 'SEARCHES_LOADING'


export function searchesLoading(){
  return {
    type: SEARCHES_LOADING
  }
}

export function setSearch(searchObj){
  return {
    type: SET_SEARCH,
    payload: searchObj
  }
}

export const fetchGeocode = (searchTerms) => {
  return(dispatch) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerms.location}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`)
      .then(resp => resp.json())
      .then(result => {

        let searchObject = {}
        searchObject["lat"] = result.results[0].geometry.location.lat
        searchObject["lng"] = result.results[0].geometry.location.lng
        searchObject["radius"] = searchTerms.radius

        dispatch({
          type: "SET_SEARCH",
          payload: searchObject
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
//
//
// }
