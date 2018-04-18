import React, { Component } from 'react'
import { Segment, Radio, Icon, Label } from 'semantic-ui-react'


class MapOptions extends Component {
  state = {
    wonToggle: false,
    prospectToggle: false,
    searchesToggle: false
  }

  handleChange = (e, {name}) => {
    let boolean;

    switch(name){
      case "wonToggle":
        boolean = !this.state.wonToggle
      break;
      case "prospectToggle":
        boolean = !this.state.prospectToggle
      break;
      default:
        boolean = !this.state.searchesToggle
    }

    this.setState({
      [name]: boolean
    }, ()=>{this.props.setToggleState(this.state)} )
  }

  render(){
    return(
      <div>
        <Segment fluid>
          <Label color='red' attached="bottom">Searches</Label>
          <Radio fluid size='large' name="searchesToggle" toggle onChange={this.handleChange} />
        </Segment>

        <Segment fluid>
          <Label color='blue' attached="bottom">Won Stores</Label>
          <Radio fluid size='large' name="wonToggle" toggle onChange={this.handleChange} />
        </Segment>

        <Segment fluid>
          <Label color='green' attached="bottom">Prospective Stores</Label>
          <Radio fluid size='large' name="prospectToggle" toggle onChange={this.handleChange} />
        </Segment>
      </div>
    )
  }

}

export default MapOptions
