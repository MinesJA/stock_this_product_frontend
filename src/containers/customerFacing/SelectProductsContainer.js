import React, { Component } from 'react'
import ProductsList from '../../components/ProductsList'

class  SelectProductsContainer extends Component {
  state = {
    fakeProps: [
      {name: "Bees Knees Spicy Honey", description: "This is the best stuff.", size: "12oz bottle", imagePath: "src/images/spicy_honey.jpg"},
      {name: "Bees Knees Salted Honey", description: "Real good.", size: "10oz bottle", imagePath: "images/spicy_honey"},
      {name: "Bees Knees Meyer Lemon Honey", description: "Hmmmmm tasy.", size: "12oz bottle", imagePath: "images/spicy_honey"},
      {name: "Trees Knees Spicy Maple", description: "This is the best stuff.", size: "15oz bottle", imagePath: "images/spicy_honey"},
      {name: "Weak Knees Gochujang Sriracha", description: "This is the best stuff.", size: "12oz bottle", imagePath: "images/spicy_honey"},
      {name: "Bees Knees Spicy Honey", description: "Yay really good hmmm.", size: "22oz bottle", imagePath: "images/spicy_honey"}
      ]
  }

  render(){
    console.log(this.state.fakeProps)
    return(

        <ProductsList fakeProps={this.state.fakeProps} />

    )
  }

}

export default SelectProductsContainer
