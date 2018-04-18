import React, { Component } from 'react'
import { Card, Form, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { signUp } from '../actions/usersActions'
import { connect } from 'react-redux'


class SignUpContainer extends Component {
  state = {
    producer: "",
    username: "",
    password: "",
    confirmation: "",
  }

  componentDidMount(){
    if(this.props.currentUser){
      this.props.history.push("/messages")
    }
  }

  componentWillReceiveProps(nextProps){
    let producer = nextProps.producers.find( producer => producer.id === nextProps.selectedProducer )

    this.setState({
      producer
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.password === this.state.confirmation){
      this.props.signUp(this.props.selectedProducer, this.state.username, this.state.password, this.props.history)
    } else {
      alert("Passwords do not match!")
    }
  }



  render(){
    return(

      <Container centered>
        <Card>
          <Card.Content>
            <Card.Header>Login</Card.Header>
            <Card.Description>
              <Form onSubmit={this.handleSubmit}>
                <h4>Sign up as an admin</h4>
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
            <Card.Meta><Link to={'/login'}>Login</Link></Card.Meta>
          </Card.Content>
        </Card>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return{
    currentUser: state.Users.currentUser,
    selectedProducer: state.Producers.selectedProducer,
    producers: state.Producers.producers
  }
}

export default connect(mapStateToProps, { signUp } )(SignUpContainer)
