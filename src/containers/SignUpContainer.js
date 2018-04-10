import React, { Component } from 'react'
import { Card, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { signUp } from '../actions/usersActions'
import { connect } from 'react-redux'
import loader from '../HOC/HOCLoading'


class SignUpContainer extends Component {
  state = {
    producer: "",
    username: "",
    password: "",
    confirmation: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.password === this.state.confirmation){
      this.props.signUp(this.state.producer, this.state.username, this.state.password, this.props.history)
    } else {
      alert("Passwords do not match!")
    }
  }



  render(){
    return(
      <Card>
        <Card.Content>
          <Card.Header>Login</Card.Header>
          <Card.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Brand Name</label>
                <Form.Input placeholder="Bob's Beets" name="producer" value={this.state.producer} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>User Name</label>
                <Form.Input placeholder="BobboBob" name="username" value={this.state.username} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input placeholder="password" name="password" value={this.state.password} type="password" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <Form.Input placeholder="confirmation" name="confirmation" value={this.state.confirmation} type="password" onChange={this.handleChange} />
              </Form.Field>
              <Form.Button>Signup</Form.Button>
            </Form>
          </Card.Description>
          <Card.Meta><Link to={'/login'} activeStyle={{ color: 'red' }}>Login</Link></Card.Meta>
        </Card.Content>
      </Card>
    )
  }

}

export default connect(null, { signUp } )(loader(SignUpContainer))
