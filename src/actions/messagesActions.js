export const SEND_MESSAGE = 'SEND_MESSAGE'
export const MESSAGE_LOADING = 'LOADING'


export function messagesLoading(){
  return {
    type: MESSAGE_LOADING
  }
}


export function sendMessage(emailObject){

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "messages":
        {
          "customer_email": emailObject.customer_email,
           "email_subject": emailObject.email_subject,
           "email_body": emailObject.email_body,
           "search_id": emailObject.search_id,
           "store_id": emailObject.store_id
        }
    })
  }


  return(dispatch) => {

    fetch('http://localhost:3000/api/v1/messages', options)
      .then(resp => resp.json())
      .then(result => {

        if(result.errors){
          alert(result.errors)
        } else {
          alert(result.message)
        }

      })
  }
}
