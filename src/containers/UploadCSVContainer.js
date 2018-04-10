import React, { Component } from 'react'
import UploadWonStores from '../components/UploadWonStores'
import UploadProspectStores from '../components/UploadProspectStores'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'


class UploadCSVContainer extends Component {

  componentDidMount(){
    if(!this.props.currentUser){
      this.props.history.push("/login")
    }
  }

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

function mapStateToProps(state){
  return{
    currentUser: state.Users.currentUser
  }
}

export default connect(mapStateToProps)(UploadCSVContainer)
