export const USER_LOADING = 'USER_LOADING'
export const ADD_USER = 'ADD_USER'
export const GET_USER = 'GET_USER'



export function signUp(producer_name, username, password, history){

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "users":
        {
          producer_name,
          username,
          password
        }
    })
  }

  return(dispatch) => {
    dispatch({
      type: USER_LOADING
    })

    fetch("http://localhost:3000/api/v1/signup", options)
      .then(res=> res.json())
      .then(response => {

        localStorage.setItem("token", response.jwt)

        dispatch({
          type: GET_USER,
          payload: response.user
        })
      })
      .then(()=>{
        history.push('/messagesreport')
      })
  }

}



export function login(username, password, history){

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "users":
        {
          username,
          password
        }
    })
  }

  return(dispatch) => {
    dispatch({
      type: USER_LOADING
    })

    fetch("http://localhost:3000/api/v1/signup", options)
      .then(res=> res.json())
      .then(response => {
        if (response.error){
          alert(response.error)
        } else {
          localStorage.setItem("token", response.jwt)
          dispatch({
            type: GET_USER,
            payload: response.user
          })
        })
      }
      .then(()=>{
        history.push('/messagesreport')
      })
  }

}



export function getUser(jwt){

  let options = {
    headers: {
      'Authorization': jwt
    }
  }

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/get_user', options)
      .then(res => res.json())
      .then()
  }
}







//
