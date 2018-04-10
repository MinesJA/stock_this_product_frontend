import React, { Component } from 'react'
import { Card, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LoginContainer extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render(){

    return(

      <Card>
        <Card.Content>
          <Card.Header>Login</Card.Header>
          <Card.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username</label>
                <Form.Input placeholder="BobboBob" name="username" value={this.state.username} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Brand Name</label>
                <Form.Input placeholder="password" name="password" value={this.state.password} type="password" onChange={this.handleChange} />
              </Form.Field>
              <Form.Button>Login</Form.Button>
            </Form>
          </Card.Description>
          <Card.Meta><Link to={'/signup'} activeStyle={{ color: 'red' }}>Sign Up</Link></Card.Meta>
        </Card.Content>
      </Card>
    )
  }

}

export default LoginContainer
