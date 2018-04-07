import React from 'react'
import { connect } from 'react-redux'
import MessageListItem from './MessageListItem'


const MessagesTable = (props) => {

  const buildListItems = () => {
    props.Messages.messages.map( (message)=>{
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

function mapStateToProps(state){
  return{
    Messages: state.Messages
  }
}


export default connect(mapStateToProps)(MessagesTable)
