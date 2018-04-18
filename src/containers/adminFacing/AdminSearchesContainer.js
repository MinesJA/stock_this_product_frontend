import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, Table, Icon, Segment, Button, Header, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'

class AdminSearchesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      column: null,
      data: props.searches,
      direction: null,
      expandMessage: null,
    }
  }

  handleSort = clickedColumn => () => {
   const { column, data, direction } = this.state

   if (column !== clickedColumn) {
     this.setState({
       column: clickedColumn,
       data: _.sortBy(data, [clickedColumn]),
       direction: 'ascending',
     })

     return
   }

   this.setState({
     data: data.reverse(),
     direction: direction === 'ascending' ? 'descending' : 'ascending',
   })
 }

 expandMessage = (clicked) => {
   console.log(clicked)
   this.setState({
     expandMessage: clicked
   }, ()=>{console.log(this.state.expandMessage)})
 }

 closeMessage = () => {
   this.setState({
     expandMessage: null
   })
 }

 renderMessage = () => {
   let { id, email_subject, email_body, customer_email} = this.state.expandMessage

   console.log(this.state.expandMessage)
   return(
     <Message>
       <Message.Header>Sent Message</Message.Header>
       <Message.List>
         <Message.Item>TO: {customer_email}</Message.Item>
         <Message.Item>FROM: {customer_email}</Message.Item>
         <Message.Item>SUBJECT: {email_subject}</Message.Item>
         <Message.Item>BODY: {email_body}</Message.Item>
       </Message.List>
       <Button floated={'right'} color="red" onClick={this.closeMessage}>X</Button>
     </Message>

   )
 }

  render() {
    const { column, data, direction } = this.state

    return (

      <Grid centered celled ='internally'>
        <Grid.Row>
          <Grid.Column width = {12}>

              <Header  as='h2' icon>
                <Icon name='search' />
                Searches Table
                <Header.Subheader>
                  See a list of all searches by customers and any messages they may have sent.
                </Header.Subheader>
              </Header>
              {this.state.expandMessage ? this.renderMessage() : null}
          </Grid.Column>
        </Grid.Row>



        <Grid.Row>
          <Grid.Column width={12}>
            <Table sortable celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell sorted={column === 'ip' ? direction : null} onClick={this.handleSort('ip')}>
                    IP Address of Searcher
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'searchTerm' ? direction : null} onClick={this.handleSort('searchTerm')}>
                    Search Term
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'radius' ? direction : null} onClick={this.handleSort('radius')}>
                    Radius
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'latitudeLongitude' ? direction : null} onClick={this.handleSort('latitudeLongitude')}>
                    Latitude / Longitude
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'Date of Search' ? direction : null} onClick={this.handleSort('date')}>
                    Date of Search
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'found' ? direction : null} onClick={this.handleSort('found')}>
                    Found Stores?
                  </Table.HeaderCell>
                  <Table.HeaderCell sorted={column === 'message' ? direction : null} onClick={this.handleSort('message')}>
                    Message
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {_.map(data, ({ id, ip, search_term, radius, latitude, longitude, created_at, buys, message }) => (
                  <Table.Row key={id}>
                    <Table.Cell>{ip}</Table.Cell>
                    <Table.Cell>{search_term}</Table.Cell>
                    <Table.Cell>{radius}</Table.Cell>
                    <Table.Cell>{latitude} / {longitude}</Table.Cell>
                    <Table.Cell>{created_at}</Table.Cell>
                    {buys ? <Table.Cell positive>Found Stores</Table.Cell> : <Table.Cell negative>None Found</Table.Cell> }
                    {message ? <Table.Cell onClick={()=>{this.expandMessage(message)}}><Icon name='mail outline' /></Table.Cell> : null}
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>

          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }
}

function mapStateToProps(state){
  return{
    searches: state.Searches.searches
  }
}

export default connect(mapStateToProps)(AdminSearchesContainer)
