import React, { Component } from 'react'
import { Segment, Radio, Icon, Label } from 'semantic-ui-react'


class SearchStoreOptions extends Component {
  state = {
    toggleWon: false,
  }
  // StoreTypeWon true is won false is prospect

  handleChange = (e, {name}) => {
    
    this.setState({
      toggleWon: !this.state.toggleWon
    }, ()=>{this.props.setGraphToggleState(this.state.toggleWon)} )
  }

  render(){
    return(
      <Segment fluid>
        <Label color='red' attached="bottom">Turn on to see Top Won Stores. Off to see Top Prospective Stores.</Label>
        <Radio fluid size='large' name="toggleWon" toggle onChange={this.handleChange} />
      </Segment>
    )
  }

}

export default SearchStoreOptions
