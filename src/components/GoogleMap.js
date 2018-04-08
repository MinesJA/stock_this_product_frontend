import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {
  state = {
    style: {width: '50%', height: '50%'},
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  

  buildMarkers = () => {
    return this.props.stores.map((store, index)=>{
      let position = {lat: store.lat, lng: store.long}

      return (<Marker
                key={index}
                title={store.name}
                name={store.name}
                position={position}
                onClick={this.onMarkerClick} />)
        })
    }


  onMarkerClick = (props, marker, e) => {
    console.log("Props: ", props, "Marker: ", marker, "e: ", e)
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
    console.log("In GoogleMap: ", this.props.center)
    return(
      <div>
      { this.props.center ?
      <Map
        google={this.props.google}
        zoom={12}
        style={this.state.style}
        initialCenter={this.props.center}
        onClick={this.onMapClicked}
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
    : null }
    </div>
    )
  }
}

export default GoogleApiWrapper({apiKey: (process.env.REACT_APP_GOOGLE_MAP_KEY)})(GoogleMap)

// How to hide api keys: https://geodoo.work/hide-secure-api-keys-created-app-create-react-app/
// https://www.npmjs.com/package/google-maps-react
