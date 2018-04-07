import React, { Component } from 'react';
// COMPONENTS
import AreaSearchForm from '../../components/AreaSearchForm'
import SelectProductsContainer from './SelectProductsContainer'

class BrandWhereToBuyContainer extends Component {


  render() {
    return (
      <div>
        <AreaSearchForm />
        <SelectProductsContainer />
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return {
//     tools: state.Tools.tools,
//     selectedTool: state.Tools.selectedTool
//   }
// }
//
// function mapDispatchToProps(dispatch){
//   return {
//     fetchTools: () => {
//       dispatch(fetchTools())
//     }
//   }
// }

export default BrandWhereToBuyContainer;
