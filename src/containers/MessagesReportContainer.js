import React, { Component } from 'react'
import MessagesTable from '../components/MessagesTable'
import MessagesAnalytics from '../components/MessagesAnalytics'


class MessagesReportContainer extends Component {
  state = {
    messages:
      [{
        store_recipient: "Jerry's Store",
        sent_to: "contact@jerrysstore.com",
        sent_from: "customer1@gmail.com",
        date_sent: "9/12/20"
      },
      {
        store_recipient: "Whole Foods",
        sent_to: "contact@wholefoods.com",
        sent_from: "customer2@gmail.com",
        date_sent: "10/12/20"
      },
      {
        store_recipient: "Carl's Store",
        sent_to: "contact@carlsstore.com",
        sent_from: "customer3@gmail.com",
        date_sent: "11/12/20"
      },
      {
        store_recipient: "Food n Stuff",
        sent_to: "contact@foodnstuff.com",
        sent_from: "customer4@gmail.com",
        date_sent: "12/12/20"
      }]

  }

  // this is where messages need to be fetched from backend
  // Should be stored in state


  render(){
    return(
       <div>
          <MessagesAnalytics />
          <MessagesTable messages={this.state.messages}/>
       </div>
    )
  }
}

export default MessagesReportContainer
