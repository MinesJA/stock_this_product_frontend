import React, { Component } from 'react'
import { Grid, Segment, List, Input, Checkbox, Button, Container, Card, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { postStores } from '../../actions/storesActions'


class UploadCSVContainer extends Component {
  state ={
    csv: null,
    wonStores: false
  }

  componentDidMount(){
    console.log("UPload container mounted")
    if(!this.props.currentUser){
      this.props.history.push("/login")
    }
  }

  handleChange = (e) => {
    this.setState({
      csv: e.target.files[0]
    })
  }

  handleSubmit = (e) => {
    this.props.postStores(this.state.csv, this.state.wonStores, this.props.currentUser)
  }

  render(){
    return(
      <Container centered>
        <Card style={{width: '500px'}}>
          <Card.Content>
            <Card.Header>
              UPLOAD STORES
            </Card.Header>
            <Card.Description>
              Upload a CSV of stores you're either currently in or would like to be in (toggle the button below to switch):
              <br></br>
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
            </Card.Description>
          </Card.Content>
        </Card>

        <Card style={{width: '500px'}}>
          <Card.Content>

            <h4>Upload Stores:</h4>


            <Input
             type="file"
             ref={(input) => { this.filesInput = input }}
             name="file"
             placeholder='UploadCSV...'
             onChange={this.handleChange}
            />
          <Container>
             <Checkbox onChange={()=>{this.setState({wonStores: !this.state.wonStores},
               ()=>{console.log(this.state.wonStores)})}} />
             <Label>Stores are Won</Label>
           </Container>
           <Button onClick={this.handleSubmit} primary>Submit File</Button>

          </Card.Content>

        </Card>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.Users.currentUser
  }
}

export default connect(mapStateToProps, { postStores })(UploadCSVContainer)
