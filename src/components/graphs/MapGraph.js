import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Container } from 'semantic-ui-react'

class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    iconWon: {
       path: this.props.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
       strokeColor: "blue",
       scale: 2
    },
    iconProspect: {
       path: this.props.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
       strokeColor: "green",
       scale: 2
    },
    iconSearch: {
      path: this.props.google.maps.SymbolPath.CIRCLE,
      strokeColor: "red",
      scale: 4
    }
  }


  buildMarkers = () => {
    let { wonToggle, prospectToggle, searchesToggle } = this.props.toggles
    let mapMarkers = []


    if (wonToggle) {
      this.props.wonStores.forEach((store, index) => {
        let position = {lat: store.latitude, lng: store.longitude}

        mapMarkers.push(<Marker
                        key={`${index}-won`}
                        title={store.name}
                        name={store.name}
                        position={position}
                        icon={this.state.iconWon}
                        onClick={this.onMarkerClick} />)
      })
    }

    if (prospectToggle) {
      this.props.prospectStores.forEach((store, index) => {
        let position = {lat: store.latitude, lng: store.longitude}

        mapMarkers.push(<Marker
                        key={`${index}-prosp`}
                        title={store.name}
                        name={store.name}
                        position={position}
                        icon={this.state.iconProspect}
                        onClick={this.onMarkerClick} />)
      })
    }

    if (searchesToggle) {
      this.props.searches.forEach((search, index) => {
        let position = {lat: search.latitude, lng: search.longitude}

        mapMarkers.push(<Marker
                        key={`${index}-search`}
                        title={search.ip}
                        name={search.ip}
                        position={position}
                        icon={this.state.iconSearch}
                        onClick={this.onMarkerClick} />)
      })
    }

    return mapMarkers
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render(){
    return(
        <Map
          google={this.props.google}
          zoom={4}
          style={{width: '800px', height: '500px', position: 'relative'}}
          containerStyle={{position: 'relative'}}
          initialCenter={{lat: 39.8283, lng: -98.5795}}
          center={this.state.center}
          onClick={this.onMapClicked}
          onReady={this.fetchData}
          >

          {this.buildMarkers()}


          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            >
              <div>
                <h1> {this.state.selectedPlace.name} </h1>
              </div>
          </InfoWindow>
        </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey: (process.env.REACT_APP_GOOGLE_MAP_KEY), style: {position: 'relative'}})(GoogleMap)
