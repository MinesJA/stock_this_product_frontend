import React, { Component } from 'react'
import { Grid, Segment, List, Input, Radio, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { postStores } from '../actions/storesActions'

class UploadStores extends Component {
  state ={
    csv: null,
    wonStores: false
  }

  handleChange = (e) => {
    this.setState({
      csv: e.target.files[0]
    }, console.log(this.state))
  }

  handleSubmit = (e) => {
    this.props.postStores(this.state.csv, this.state.wonStores, this.props.currentUser)
  }

  render(){
    return(
      <Grid stackable columns={1}>
        <Grid.Column>

          <Segment>
            UPLOAD STORES
          </Segment>

          <Segment>
            Upload a CSV of stores you're either currently in or would like to be in (toggle the button below to switch):
            <List>
              <List.Item>store_name</List.Item>
              <List.Item>address_one</List.Item>
              <List.Item>address_two</List.Item>
              <List.Item>city</List.Item>
              <List.Item>state</List.Item>
              <List.Item>zipcode</List.Item>
              <List.Item>phone</List.Item>
              <List.Item>email</List.Item>
            </List>
          </Segment>

          <Segment>
            <label>Toggle on for won stores, off for prospective stores</label>
            <Radio onChange={()=>{this.setState({wonStores: !this.state.wonStores},
              ()=>{console.log(this.state.wonStores)})}} toggle />
          </Segment>

          <Segment>
            <Input
             type="file"
             ref={(input) => { this.filesInput = input }}
             name="file"
             icon='file text outline'
             iconPosition='left'
             label='Upload CSV'
             labelPosition='right'
             placeholder='UploadCSV...'
             onChange={this.handleChange}
           />
          </Segment>
          <Segment>
            <Button onClick={this.handleSubmit} primary>Submit File</Button>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }

}

function mapStateToProps(state){
  return{
    currentUser: state.Users.currentUser
  }
}

export default connect(mapStateToProps, { postStores })(UploadStores)
