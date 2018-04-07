import React, { Component } from 'react'
import UploadWonStores from '../components/UploadWonStores'
import UploadProspectStores from '../components/UploadProspectStores'
import { Grid } from 'semantic-ui-react'



class UploadCSVContainer extends Component {



  render(){
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <UploadWonStores />
          </Grid.Column>
          <Grid.Column width={8}>
            <UploadProspectStores />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default UploadCSVContainer
