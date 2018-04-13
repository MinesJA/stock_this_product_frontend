import React from 'react'
import { Table } from 'semantic-ui-react'

const MessageListItem = (props) => {

  let { store_recipient, sent_to, sent_from, date_sent } = props.message

  return(
        <Table.Row>
          <Table.Cell>{store_recipient}</Table.Cell>
          <Table.Cell>{sent_to}</Table.Cell>
          <Table.Cell>{sent_from}</Table.Cell>
          <Table.Cell>{date_sent}</Table.Cell>
        </Table.Row>
      )
}

export default MessageListItem
