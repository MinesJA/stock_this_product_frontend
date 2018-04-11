export const SEND_MESSAGE = 'SEND_MESSAGE'
export const MESSAGE_LOADING = 'LOADING'
export const EMAIL_STORE = 'SELECT_MESSAGE'


export function messagesLoading(){
  return {
    type: MESSAGE_LOADING
  }
}

export function sendMessage(message){

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
      type: MESSAGE_LOADING
    })

    fetch('http://localhost:3000/api/v1/messages')


  }













  return {
    type: SEND_MESSAGE,
    payload: message
  }
}

export function emailStore(store){
  return {
    type: EMAIL_STORE,
    payload: store
  }
}
// emailStore returns the store object which can be referenced in message composition
