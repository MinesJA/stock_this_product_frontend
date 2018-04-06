import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class GoogleMap extends Component {
  state = {
    style: {width: '50%', height: '50%'},
    initialCenter: {lat: 40.707993, lng: -74.011387},
    center: {lat: 40.854885, lng: -88.081807},
    markers: [
      {title:"Joe's Grocery", name:"joe", position: {lat: "40.713582", lng: "-74.008669"}, distance: ""},
      {title:"Food n Stuff", name:"food", position: {lat: "40.708541", lng: "-74.008655"}, distance: ""},
      {title:"Grocers Grocer", name:"grocers", position: {lat: "40.709780", lng: "-74.014549"}, distance: ""},
      {title:"Food Here", name:"here", position: {lat: "40.705604", lng: "-74.014006"}, distance: ""}
    ],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }


  buildMarkers = () => {
    return this.state.markers.map((marker)=>{
      return (<Marker
                title={marker.title}
                name={marker.name}
                position={marker.position}
                name={`${marker.title}`}
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

  // fetchDistance = () => {
  //   fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${lat,long}&destinations=${lat,long}&key=${googleMapsKey}`)
  // }


  render(){
    return(
      <Map
        google={this.props.google}
        zoom={14}
        style={this.state.style}
        initialCenter={this.state.initialCenter}
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

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAP_KEY)
})(GoogleMap)

// How to hide api keys: https://geodoo.work/hide-secure-api-keys-created-app-create-react-app/
// https://www.npmjs.com/package/google-maps-react
