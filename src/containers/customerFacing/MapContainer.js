import React, { Component } from 'react'
import GoogleMap from '../../components/GoogleMap'
import { StoreList } from '../../components/StoreList'
import AreaSearchForm from '../../components/AreaSearchForm'


class MapContainer extends Component {



  render(){

    return(
      <div>
        <AreaSearchForm />
        <GoogleMap />
        <StoreList />
      </div>
    )
  }
}

export default MapContainer
