import React, { Component } from 'react';
import { connect } from 'react-redux'

// COMPONENTS
import SelectAreaContainer from './SelectAreaContainer'
import SelectProductsContainer from './SelectProductsContainer'


class BrandWhereToBuyContainer extends Component {

  // componentDidMount(){
  //   this.props.fetchTools()
  // }

  render() {
    return (
      <div>
        <SelectAreaContainer history={this.props.history} />
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
