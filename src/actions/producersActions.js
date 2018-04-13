export const PRODUCER_LOADING = 'PRODUCER_LOADING'
export const FETCH_PRODUCERS = 'FETCH_PRODUCERS'
export const SELECT_PRODUCER = 'SELECT_PRODUCER'


export function producersLoading(){
  return {
    type: PRODUCER_LOADING
  }
}


export function selectProducer(producer_id){
  return {
    type: SELECT_PRODUCER,
    payload: producer_id
  }
}


export function fetchProducers(){

  return(dispatch) => {
    dispatch({
      type: PRODUCER_LOADING
    })

    return fetch(`http://localhost:3000/api/v1/producers`)
      .then(resp => resp.json())
      .then(result => {

        dispatch({
          type: FETCH_PRODUCERS,
          payload: result
        })

        return result
    })
  }
}
