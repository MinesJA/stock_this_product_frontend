import React, { Component } from 'react'
import { Grid, Icon, Header, Segment, Image, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ProductsList from '../../components/ProductsList'
import loader from '../../HOC/HOCLoading'
import picture from '../../images/bobsMayoBackground.jpg'
import symbol from '../../images/mayo_symbol.png'

class BrandHomeContainer extends Component {

  state = {
    producer: {}
  }



  render(){

    let producer = this.props.producers.find( producer => producer.id === this.props.selectedProducer )
    console.log(producer)
    return(

      <Segment style={{ padding: '0 100px 0 100px'}}>
        <Grid container centered celled>
          <Grid.Row>
            <Grid.Column width={10}>
              <Image src={picture} id="homepageMainImage"/>
            </Grid.Column>
            <Grid.Column width={6}>

              <Grid.Row>
                <Grid.Column>
                  <Segment basic> </Segment>
                  <Segment basic>
                    <Header as='h2' icon textAlign='center' >
                      <img src={symbol} />
                      <Header.Content>
                        {producer.name}
                      </Header.Content>
                      <Header.Subheader>
                        {producer.description}
                      </Header.Subheader>
                    </Header>
                  </Segment>
                  <Segment basic> </Segment>
                </Grid.Column>

              </Grid.Row>


            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <ProductsList products={producer.products} history={this.props.history}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
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
