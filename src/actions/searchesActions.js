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

export const fetchGeocode = (searchContent) => {
  return(dispatch) => {

    dispatch({
      type: SEARCHES_LOADING
    })

    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchContent.searchTerm}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`)
      .then(resp => resp.json())
      .then(result => {

        let searchObject = {}
        searchObject["lat"] = result.results[0].geometry.location.lat
        searchObject["lng"] = result.results[0].geometry.location.lng
        searchObject["radius"] = searchContent.radius
        searchObject["producer_id"] = searchContent.producer_id
        searchObject["searchTerm"] = searchContent.searchTerm


        return searchObject
    })
  }
}

export const postSearchTerms = (searchObject) => {

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "searches":
        {
          "producer_id": searchObject.producer_id,
          "search_term": searchObject.searchTerm,
          "radius": searchObject.radius,
          "latitude": searchObject.lat,
          "longitude": searchObject.lng
        }
    })
  }

  return(dispatch) => {

    dispatch({
      type: SEARCHES_LOADING
    })

    return fetch('http://localhost:3000/api/v1/searches', options)
      .then(resp => resp.json())
      .then(result => {
        alert(result.message)

        // need to set search object here with returned id from post
        // also need to make sure id is being returned from backend

        searchObject["id"] = result.id
        console.log("Posted search: ", result)
        dispatch({
          type: SET_SEARCH,
          payload: searchObject
        })
      })
  }
}


//
