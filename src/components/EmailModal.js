import React, { Component } from 'react'
import { Popup, Button, Modal, TextArea, Input, Label } from 'semantic-ui-react'

class EmailModal extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Popup trigger={<Button onClick={this.show(false)}>Email Them</Button>}>
          <Popup.Header>Heads up!</Popup.Header>
          <Popup.Content>
            Hello World
          </Popup.Content>
        </Popup>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Send Jerrys Mayo an email</Modal.Header>
          <Modal.Content>
            <Modal.Description>

            <Input labelPosition='right' type='text' placeholder='yourname@you.com'>
              <Label basic>From:</Label>
              <input />
            </Input>

            <Input labelPosition='right' type='text' placeholder='jerry@jerrysmayo.com'>
              <Label basic>To:</Label>
              <input />
            </Input>

            <TextArea autoHeight fluid placeholder='Try adding multiple lines' style={{ minWidth: 800, minHeight: 200 }} />



            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Go back.
            </Button>
            <Button positive icon='mail outline' labelPosition='right' content="Send Email" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default EmailModal
