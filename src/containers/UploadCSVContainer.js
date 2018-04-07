import React, { Component } from 'react'
import UploadWonStores from '../components/UploadWonStores'
import UploadProspectStores from '../components/UploadProspectStores'


class UploadCSVContainer extends Component {



  render(){
    return(
      <div>
        <UploadWonStores />
        <UploadProspectStores />
      </div>
    )
  }
}
