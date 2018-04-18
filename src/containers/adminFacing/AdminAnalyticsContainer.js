import React, { Component } from 'react'
import { Grid, Image, Segment, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchStores } from '../../actions/storesActions'
import { fetchSearches } from '../../actions/searchesActions'
import MapGraph from '../../components/graphs/MapGraph'
import SearchesMessagesOnMap from '../../components/graphs/SearchesMessagesOnMap'
import SearchesMessagesByState from '../../components/graphs/SearchesMessagesByState'
import SearchesMessagesByStore from '../../components/graphs/SearchesMessagesByStore'
import SearchesMessagesByTime from '../../components/graphs/SearchesMessagesByTime'
import MapOptions from '../../components/graphs/MapOptions'
import SearchStoreOptions from '../../components/graphs/SearchStoreOptions'

class AdminAnalyticsContainer extends Component {
  state = {
    wonToggle: false,
    prospectToggle: false,
    searchesToggle: false,
    toggleWon: false,
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
    })
  }

  setGraphToggleState = (toggleWon) => {
    this.setState({
      toggleWon
    })
  }

  render(){
    return(
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header centered>
              Map Toggles
              <Header.Subheader>
                Toggle the switches to display searches, won stores, and/or prospective stores on the map
              </Header.Subheader>
            </Header>
            <MapOptions setToggleState={this.setToggleState}/>
          </Grid.Column>
          <Grid.Column width={13}>
            <Header centered>
              Search and Stores Map
              <Header.Subheader>
                See the locations of customer searches as they compare to your won and prospective stores
              </Header.Subheader>
            </Header>
            <MapGraph searches={this.props.searches} prospectStores={this.props.prospectStores} wonStores={this.props.wonStores} toggles={this.state}/>
           </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={7}>
            <Header centered>
              Top Stores by Search Volume
              <Header.Subheader>
                View the stores that come up the most in customer searches
              </Header.Subheader>
            </Header>
            <SearchesMessagesByStore toggleWon={this.state.toggleWon}/>
            <SearchStoreOptions setGraphToggleState={this.setGraphToggleState} />
          </Grid.Column>
          <Grid.Column width={7}>
            <Header centered>
              See Searches over Time
              <Header.Subheader>
                See the number of searches performed by customers over time.
              </Header.Subheader>
            </Header>
            <SearchesMessagesByTime />
            
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
