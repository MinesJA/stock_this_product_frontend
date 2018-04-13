import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import AreaSearchForm from '../../components/AreaSearchForm';
import SelectProductsContainer from './SelectProductsContainer';
import BrandMapContainer from './BrandMapContainer';
import {fetchProducers } from '../../actions/producersActions'

class BrandWhereToBuyContainer extends Component {

  state = {
    producerOptions: []
  }

  componentDidMount(){
    this.props.fetchProducers()
      .then((producers)=> {
        let array = []

        producers.map((producer)=>{
          console.log(producer)
          let object = {}
          object["text"] = producer.name
          object["value"] = producer.id
          array.push(object)
        })

        this.setState({
          producerOptions: array
        })
      })
  }


  render() {
    return (
      <div>
        <AreaSearchForm producersOptions={this.state.producerOptions}/>
        { this.props.searchObject.lat > 0 ? <BrandMapContainer /> : <SelectProductsContainer /> }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    searchObject: state.Searches.searchObject
  }
}

export default connect(mapStateToProps, { fetchProducers })(BrandWhereToBuyContainer);
