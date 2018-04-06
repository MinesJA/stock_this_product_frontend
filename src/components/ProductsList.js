import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

import Product from './Product'

const ProductsList = (props) => {

  const buildProducts = () => {
    return props.fakeProps.map((product)=>{
      let { name, description, size, imagePath } = product

      return(
        <Grid.Column>
          <Product name={name} description={description} size={size} imagePath={imagePath} />
        </Grid.Column>
      )
    })
  }

  return(
    <Grid container columns={3}>
      {buildProducts()}
    </Grid>
  )
}

export default ProductsList
