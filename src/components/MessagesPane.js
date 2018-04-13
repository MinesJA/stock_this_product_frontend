import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const MessagePane = (props) => {

  const renderRows = () => {




    return(
      <Table.Row>
        <Table.Cell>props.store_name</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    )

  }


  return(
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Sent To (Store Name)</Table.HeaderCell>
          <Table.HeaderCell>Sent To (Store Email)</Table.HeaderCell>
          <Table.HeaderCell>Sent From (Customer Email)</Table.HeaderCell>
          <Table.HeaderCell>Associated Search</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>

        <Table.Row error>
          <Table.Cell>Jimmy</Table.Cell>
          <Table.Cell>Cannot pull data</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell error>
            <Icon name='attention' />
              Classified
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

function mapStateToProps(state){
  return{
    messages: state.Messages.messages
  }
}

export default connect(mapStateToProps)(MessagePane)
