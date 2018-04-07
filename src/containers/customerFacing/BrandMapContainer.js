import React, { Component } from 'react'
import GoogleMap from '../../components/GoogleMap'
import { StoreList } from '../../components/StoreList'
import AreaSearchForm from '../../components/AreaSearchForm'


class MapContainer extends Component {


  componentDidReceiveProps(){
    this.props.fetchStores()


  }


  render(){
    return(
      <div>
        <AreaSearchForm />
        <GoogleMap
          center={this.props.center}
          radius={this.props.radius}
          stores={this.props.stores}
        />
        <StoreList
          stores={this.props.stores}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    searchLoading: state.Searches.loading,
    center: state.Searches.center,
    radius: state.Searches.radius,
    stores: state.Stores.stores
  }
}

export default MapContainer
