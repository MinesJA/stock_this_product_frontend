import React, { Component } from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

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
    console.log("Clicked Close")
    this.setState({
      open: false
    }, ()=>{console.log(this.state)})
  }

  render() {
    

    return (
        <Modal style={this.state.style} dimmer={'blurring'} open={this.state.open} onClose={this.close}>
          <Modal.Header>No stores around...but we can fix that!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='src/images/grocery_store.jpeg' />
            <Modal.Description>
              <p>Oh no! It looks like there aren't any stores in your area that are currently carrying our products.</p>
              <p>But we can fix that! We've got a prewritten message that we'd love for you to send to the store of your choice.</p>
              <br></br>
              <p>Would you be willing to send an email asking the store/s of your choosing to pick up our products?</p>
              <p>If you do we'll give you 10% off your next purchase!</p>
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
