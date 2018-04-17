import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const Product = (props) => {
  let { id, name, description, size, price } = props.product

  return(
    <Card key={id}>
      <Image src={props.imagePath} />
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          <span>
            {size}
          </span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='dollar' />
          {price}
        </a>
      </Card.Content>
    </Card>
  )
}

export default Product
