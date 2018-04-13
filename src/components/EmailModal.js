import React, { Component } from 'react'
import { Form, Modal, Button, Label, TextArea, Input, Segment } from 'semantic-ui-react'
import { sendMessage } from '../actions/messagesActions'
import { connect } from 'react-redux'
import { selectProducer } from '../actions/producersActions'
import { messageStore } from '../actions/storesActions'

class EmailModal extends Component {
  state = {
    open: true,
    style: {
      marginTop: '0px !important',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    producer: "",
    store: "",
    emailSubject: "",
    emailBody: "",
    customerEmail: "",
    search_id: ""
  }

  componentDidMount(){
    let producer = this.props.producers.find((producer)=>{return producer.id === this.props.producer_id})
    let store = this.props.selectedStores.find((store)=>{return store.id === this.props.store_id})

    this.setState({
      producer,
      store,
      emailSubject: `Would you carry ${producer.name}?`,
      emailBody: `Hey there, \n \n  I live in the area and shop at ${store.name} but I noticed you don't carry ${producer.name}. Is that something you'd consider picking up? I know I'd buy it if you carried it. \n \n Thanks! \n A Loyal Customer`
    }, ()=>{console.log("Mounted: ", this.state)})
  }

  sendEmail = () => {

    this.setState({
      open: false,
    })

    let emailObject = {
      producer_id: this.state.producer.id,
      store_id: this.state.store.id,
      email_subject: this.state.emailSubject,
      email_body: this.state.emailBody,
      customer_email: this.state.customerEmail,
      search_id: this.props.searchObject.id
    }

    this.props.sendMessage(emailObject)

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{console.log(this.state)})
  }

  close = () => {
    this.setState({
      open: false
    })
  }


  render() {

    let defaultSubject = `Would you carry ${this.state.producer.name}?`
    let defaultBody = `Hey there, \n \n  I live in the area and shop at ${this.state.store.name} but I noticed you don't carry ${this.state.producer.name}. Is that something you'd consider picking up? I know I'd buy it if you carried it. \n \n Thanks! \n A Loyal Customer`

    return (
        <Modal style={this.state.style} dimmer={'blurring'} open={this.state.open} onClose={this.close}>
          <Modal.Header>Send {this.state.store.name} an email</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Form>

                <Segment.Group>
                  <Segment>
                    <Label basic>To:</Label>
                    <Label basic>{this.state.store.email}</Label>
                  </Segment>
                  <Segment>
                    <Label basic>From:</Label>
                    <Input name="customerEmail" type='text' placeholder='youremail@you.com' onChange={this.handleChange} />
                  </Segment>
                  <Segment>
                    <Label basic>Subject</Label>
                    <Input name="emailSubject" type='text' onChange={this.handleChange} defaultValue={defaultSubject} />
                  </Segment>
                </Segment.Group>

                <TextArea name="emailBody" autoHeight fluid="true" style={{ minWidth: 600, minHeight: 200 }} onChange={this.handleChange} defaultValue={defaultBody} />

              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Go back
            </Button>
            <Button positive icon='mail outline' labelPosition='right' content="Send email" onClick={(e)=>{this.sendEmail()}} />
          </Modal.Actions>
        </Modal>
    )
  }
}

function mapStateToProps(state){
  return{
    selectedStores: state.Stores.selectedStores,
    store_id: state.Stores.messageStore,
    producers: state.Producers.producers,
    producer_id: state.Producers.selectedProducer,
    searchObject: state.Searches.searchObject
  }
}

export default connect(mapStateToProps, { sendMessage, selectProducer, messageStore })(EmailModal)
