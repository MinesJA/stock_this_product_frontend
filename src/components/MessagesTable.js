import React from 'react'
import MessageListItem from './MessageListItem'
import { Table } from 'semantic-ui-react'



const MessagesTable = (props) => {

  const buildListItems = () => {
    return props.messages.map( (message)=>{

      return (

        <MessageListItem message={message} />
      )
    })
  }

  return(
    <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Recipient (Store)</Table.HeaderCell>
        <Table.HeaderCell>Sent to (Email)</Table.HeaderCell>
        <Table.HeaderCell>Sent From (Email)</Table.HeaderCell>
        <Table.HeaderCell>Date Sent</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {buildListItems()}
    </Table.Body>
  </Table>
  )
}

// function mapStateToProps(state){
//   return{
//     Messages: state.Messages
//   }
// }


export default MessagesTable
