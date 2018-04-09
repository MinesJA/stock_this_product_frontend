import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import AreaSearchForm from '../../components/AreaSearchForm';
import SelectProductsContainer from './SelectProductsContainer';
import BrandMapContainer from './BrandMapContainer';

class BrandWhereToBuyContainer extends Component {


  render() {
    return (
      <div>
        <AreaSearchForm />
        { this.props.searchObject.lat ? <BrandMapContainer /> : <SelectProductsContainer /> }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    searchObject: state.Searches.searchObject
  }
}

export default connect(mapStateToProps)(BrandWhereToBuyContainer);
