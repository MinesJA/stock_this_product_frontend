import React from 'react'
import { Grid } from 'semantic-ui-react'
import Product from './Product'

const ProductsList = (props) => {

  const buildProducts = () => {
    return props.products.map( (product, index) =>
      <Grid.Column key={index}>
        <Product product={product} history={props.history}/>
      </Grid.Column>
    )
  }


  return(
    <Grid container columns={4}>
      {props.products ? buildProducts() : null}
    </Grid>
  )
}


export default ProductsList
