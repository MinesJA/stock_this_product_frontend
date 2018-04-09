import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {
  state = {
    center: {},
    style: {width: '400px', height: '400px'},
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    iconWon: {
      path: this.props.google.maps.SymbolPath.CIRCLE,
       strokeColor: "green",
       scale: 5
    },
    iconProspect: {
      path: this.props.google.maps.SymbolPath.CIRCLE,
       strokeColor: "red",
       scale: 5
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("Current props: ", this.props)
    this.setState({
      center: nextProps.center
    })
    console.log("Next props: ", nextProps)
  }


  buildMarkers = () => {
    if(this.props.stores.length > 0){
      return this.props.stores.map((store, index)=>{
        let position = {lat: store.latitude, lng: store.longitude}

        return (<Marker
                  key={index}
                  title={store.name}
                  name={store.name}
                  position={position}
                  icon={store.buys ? this.state.iconWon : this.state.iconProspect}
                  onClick={this.onMarkerClick} />)
      })
    }
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
        zoom={12}
        style={this.state.style}
        initialCenter={this.state.center}
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


    )
  }
}

export default GoogleApiWrapper({apiKey: (process.env.REACT_APP_GOOGLE_MAP_KEY)})(GoogleMap)

// How to hide api keys: https://geodoo.work/hide-secure-api-keys-created-app-create-react-app/
// https://www.npmjs.com/package/google-maps-react
