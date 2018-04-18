import React, { Component } from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import alertImage from '../images/ohno.jpg'

class AlertModal extends Component {
  state = {
    open: true,
    style: {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }

  close = () => {
    this.setState({
      open: false
    })
  }

  render() {


    return (
        <Modal style={this.state.style} dimmer={'blurring'} open={this.state.open} onClose={this.close}>
          <Modal.Header>No stores around...but we can fix that!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={alertImage} />
            <Modal.Description>
              <h4>Oh no! It looks like there aren't any stores in your area that are currently carrying our products.</h4>
              <h4>But we can fix that!</h4>
              <h4>Would you be willing to send an email asking the store/s of your choosing to pick up our products?</h4>
              <h4>If so, all you have to do is click the "Email Them" button underneath their name.</h4>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Let's do it!" onClick={this.close} />
          </Modal.Actions>
        </Modal>
    )
  }
}

export default AlertModal
