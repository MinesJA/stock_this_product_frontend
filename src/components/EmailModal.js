import React, { Component } from 'react'
import { Form, Modal, Button, Label } from 'semantic-ui-react'
import { sendMessage } from '../actions/messagesActions'
import { connect } from 'react-redux'

class EmailModal extends Component {
  state = {
    open: true,
    style: {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    customerEmail: "",
    producerEmail: "",
    messageText: "",
  }

  sendEmail = () => {

    this.setState({
      open: false
    })

    this.props.sendMessage()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{console.log(this.state)})
  }

  render() {
    return (
        <Modal style={this.state.style} dimmer={'blurring'} open={this.state.open} onClose={this.close}>
          <Modal.Header>Send Jerrys Mayo an email</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Form>
                <Label basic>To:</Label>
                <Form.Input labelPosition='right' name="producerEmail" type='text' placeholder='jerry@jerrysmayo.com' onChange={this.handleChange} />

                <Label basic>From:</Label>
                <Form.Input labelPosition='right' name="customerEmail" type='text' placeholder='yourname@you.com' onChange={this.handleChange} />

                <Form.TextArea autoHeight fluid name="text" placeholder='Try adding multiple lines' style={{ minWidth: 600, minHeight: 200 }} onChange={this.handleChange} />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Go back
            </Button>
            <Button positive icon='mail outline' labelPosition='right' content="Send email" onClick={this.sendEmail} />
          </Modal.Actions>
        </Modal>
    )
  }
}

export default connect(null, { sendMessage })(EmailModal)
