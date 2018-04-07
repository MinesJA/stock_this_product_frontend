import React from 'react'
import { Grid } from 'semantic-ui-react'

import Product from './Product'

const ProductsList = (props) => {

  const buildProducts = () => {
    return props.fakeProps.map((product, index)=>{
      let { name, description, size, imagePath } = product

      return(
        <Grid.Column>
          <Product key={index} name={name} description={description} size={size} imagePath={imagePath} />
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
