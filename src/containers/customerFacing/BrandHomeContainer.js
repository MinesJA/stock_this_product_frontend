import React, { Component } from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ProductsList from '../../components/ProductsList'
import loader from '../../HOC/HOCLoading'

class BrandHomeContainer extends Component {

  state = {
    producer: {}
  }



  render(){
    
    let producer = this.props.producers.find( producer => producer.id === this.props.selectedProducer )

    return(
      <Grid container centered columns={4}>
        <Grid.Column>
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
              {producer.name}
            </Header.Content>
          </Header>
        <p>{producer.description}</p>
        </Grid.Column>

        <ProductsList products={producer.products} />

      </Grid>
    )
  }

}

function mapStateToProps(state){
  return {
    producers: state.Producers.producers,
    selectedProducer: state.Producers.selectedProducer,
    loading: state.Producers.producersLoading || !state.Producers.attemptedLoading
  }
}

export default connect(mapStateToProps)(loader(BrandHomeContainer))
