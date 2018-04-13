import React, { Component } from 'react'
import DataTable from '../components/DataTable'
import DataGraphs from '../components/DataGraphs'



class AnalyticsContainer extends Component {
  state = {

  }


  render(){
    return(
      <div>
        <DataGraphs />
        <DataTable />
      </div>

    )
  }
}

export default AnalyticsContainer




// import React, { Component } from 'react'
// import MessagesTable from '../components/MessagesTable'
// import MessagesAnalytics from '../components/MessagesAnalytics'
// import { connect } from 'react-redux'
//
// class MessagesReportContainer extends Component {
//   state = {
//     messages:
//       [{
//         store_recipient: "Jerry's Store",
//         sent_to: "contact@jerrysstore.com",
//         sent_from: "customer1@gmail.com",
//         date_sent: "9/12/20"
//       },
//       {
//         store_recipient: "Whole Foods",
//         sent_to: "contact@wholefoods.com",
//         sent_from: "customer2@gmail.com",
//         date_sent: "10/12/20"
//       },
//       {
//         store_recipient: "Carl's Store",
//         sent_to: "contact@carlsstore.com",
//         sent_from: "customer3@gmail.com",
//         date_sent: "11/12/20"
//       },
//       {
//         store_recipient: "Food n Stuff",
//         sent_to: "contact@foodnstuff.com",
//         sent_from: "customer4@gmail.com",
//         date_sent: "12/12/20"
//       }]
//
//   }
//
//   // this is where messages need to be fetched from backend
//   // Should be stored in state
//
//   componentDidMount(){
//     if(!this.props.currentUser){
//       this.props.history.push("/login")
//     }
//   }
//
////
// function mapStateToProps(state){
//   return{
//     currentUser: state.Users.currentUser
//   }
// }
//
// export default connect(mapStateToProps)(MessagesReportContainer)
