import React from 'react'
import { Card, Icon, Image, Checkbox } from 'semantic-ui-react'

const Product = (props) => (
  <Card>
    <Image src='/images/spicy_honey.jpg' />
    <Card.Content>
      <Card.Header>
        {props.name}
      </Card.Header>
      <Card.Meta>
        <span>
          {props.size}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.description}
        <Checkbox toggle />
      </Card.Description>
    </Card.Content>
  </Card>
)

export default Product
