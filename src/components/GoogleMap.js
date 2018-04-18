import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {
  state = {
    center: {},
    showingInfoWindow: false,
    initialCenter: {lat: 40.7128, lng: -74.0060},
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
    this.setState({
      center: nextProps.center
    })
  }

  buildMarkers = () => {
    if(this.props.stores.length > 0){
      return this.props.stores.map((store, index)=>{
        let position = {lat: store.latitude, lng: store.longitude}

        return (<Marker
                  key={index}
                  title={store.name}
                  name={store.name}
                  storeInfo={store}
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
        style={{width: '100%', height: '500px', position: 'relative'}}
        containerStyle={{position: 'relative'}}
        initialCenter={this.props.center}
        center={this.state.center}
        onClick={this.onMapClicked}
        >

        {this.buildMarkers()}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          >
            <div>
              <h4> {this.state.selectedPlace.name} </h4>
              {this.state.selectedPlace.storeInfo ?
                <div>
                  <p>{this.state.selectedPlace.storeInfo.address_one}</p>
                  <p>{this.state.selectedPlace.storeInfo.city}, {this.state.selectedPlace.storeInfo.state} {this.state.selectedPlace.storeInfo.zipcode}</p>
                  <p>{this.state.selectedPlace.storeInfo.phone}</p>
                </div>
              :

              null
              }

            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey: (process.env.REACT_APP_GOOGLE_MAP_KEY)})(GoogleMap)

// How to hide api keys: https://geodoo.work/hide-secure-api-keys-created-app-create-react-app/
// https://www.npmjs.com/package/google-maps-react
