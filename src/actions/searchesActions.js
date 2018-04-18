export const SET_SEARCH = 'SET_SEARCH'
export const SEARCHES_LOADING = 'SEARCHES_LOADING'
export const FETCH_SEARCHES = 'FETCH_SEARCHES'
export const STORES_LOADING = 'STORES_LOADING'
export const SELECT_STORES = 'SELECT_STORES'


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

export const postSearch = (searchObject) => {

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
          "longitude": searchObject.lng,
        }
    })
  }

  return(dispatch) => {

    dispatch({
      type: SEARCHES_LOADING
    })

    dispatch({
      type: STORES_LOADING
    })

    return fetch('http://localhost:3000/api/v1/searches', options)
      .then(resp => resp.json())
      .then(result => {
        if(result.error){

          alert(result.error)

        } else {

          searchObject["id"] = result.id
          searchObject["buys"] = result.buys
          searchObject["numberWon"] = result.number_won
          searchObject["numberProspect"] = result.number_prospect

          dispatch({
            type: SET_SEARCH,
            payload: searchObject
          })

          dispatch({
            type: SELECT_STORES,
            payload: result.found_stores
          })
        }
      })
  }
}




export const fetchSearches = () => {

  return(dispatch) => {

    dispatch({
      type: SEARCHES_LOADING
    })

    return fetch('http://localhost:3000/api/v1/searches')
      .then(resp => resp.json())
      .then(result => {
        
        dispatch({
          type: FETCH_SEARCHES,
          payload: result
        })

      })
  }
}


//
