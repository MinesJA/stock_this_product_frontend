import React, { Component } from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchStores } from '../../actions/storesActions'
import { fetchSearches } from '../../actions/searchesActions'
import MapGraph from '../../components/graphs/MapGraph'
import SearchesMessagesOnMap from '../../components/graphs/SearchesMessagesOnMap'
import SearchesMessagesByState from '../../components/graphs/SearchesMessagesByState'
import SearchesMessagesByStore from '../../components/graphs/SearchesMessagesByStore'
import SearchesMessagesByTime from '../../components/graphs/SearchesMessagesByTime'
import MapOptions from '../../components/graphs/MapOptions'

class AdminAnalyticsContainer extends Component {
  state = {
    wonToggle: false,
    prospectToggle: false,
    searchesToggle: false
  }

  componentDidMount(){
    this.props.fetchSearches()
    this.props.fetchStores(this.props.selectedProducer)
  }


  setToggleState = (newState) => {
    this.setState({
      wonToggle: newState.wonToggle,
      prospectToggle: newState.prospectToggle,
      searchesToggle: newState.searchesToggle
    }, ()=>{console.log(this.state)})
  }

  render(){
    return(
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <MapOptions setToggleState={this.setToggleState}/>
          </Grid.Column>
          <Grid.Column width={13}>
            <MapGraph searches={this.props.searches} prospectStores={this.props.prospectStores} wonStores={this.props.wonStores} toggles={this.state}/>
           </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={7}>
            <SearchesMessagesByStore />
          </Grid.Column>
          <Grid.Column width={7}>
            <SearchesMessagesByStore searches={this.props.searches} />
          </Grid.Column>


        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    searches: state.Searches.searches,
    wonStores: state.Stores.wonStores,
    prospectStores: state.Stores.prospectStores,
    selectedProducer: state.Producers.selectedProducer
  }
}

export default connect(mapStateToProps, { fetchSearches, fetchStores })(AdminAnalyticsContainer)
