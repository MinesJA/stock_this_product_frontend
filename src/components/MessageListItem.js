import React from 'react'


const MessageListItem = (props) => (
    <Table.Row>
      <Table.Cell>props.store_recipient</Table.Cell>
      <Table.Cell>props.sent_to</Table.Cell>
      <Table.Cell>props.sent_from</Table.Cell>
      <Table.Cell>props.date_sent</Table.Cell>
    </Table.Row>
  )

export default MessageListItem
