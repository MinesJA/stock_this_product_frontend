import React, { Component } from 'react'
import { Input, Dropdown, Form, Button } from 'semantic-ui-react'



class AreaSearchForm extends Component {
  state = {
    options: [
      {key: 5, text: "5 miles", value: 5 },
      {key: 10, text: "10 miles", value: 10 },
      {key: 20, text: "20 miles", value: 20 },
    ],
    location: "",
    radius: "",
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  dropDownChange = (e, { value }) => {
    this.setState({
      radius: value
    })
  }

  submitForm = () => {

    this.props.history.push("/showMap")

  }

  setCenter = () => {


  }


  render(){

    return(
      <Form onSubmit={this.submitForm}>
        <Form.Group>
        <Form.Input onChange={this.handleChange} name="location" placeholder="Enter Zip Code, Address, or City..." />
        <div>within...</div>
        <Form.Dropdown onChange={this.dropDownChange} name="radius" placeholder='20 miles' wrapSelection={false} options={this.state.options} />
        <Form.Button primary>FIND PROUDCTS</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {
    setCenter: ()
  }



}

export default AreaSearchForm
