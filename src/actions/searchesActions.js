export const SET_SEARCH = 'SET_SEARCH'
export const SEARCHES_LOADING = 'LOADING'


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

    dispatch({
      type: SEARCHES_LOADING
    })

    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerms.location}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`)
      .then(resp => resp.json())
      .then(result => {

        let searchObject = {}
        searchObject["lat"] = result.results[0].geometry.location.lat
        searchObject["lng"] = result.results[0].geometry.location.lng
        searchObject["radius"] = searchTerms.radius

        dispatch({
          type: SET_SEARCH,
          payload: searchObject
        })

        return searchObject
    })
  }
}

export const postSearchTerms = (searchTerm, radius) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "searches":
        {
          "search_term": searchTerm,
          "radius": radius
        }
    })
  }

  fetch('http://localhost:3000/api/v1/searches', options)
    .then(resp => resp.json())
    .then(result => {
      console.log("Posted search to backend: ", result)
    })
}


//
