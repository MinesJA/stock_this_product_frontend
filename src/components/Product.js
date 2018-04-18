import React from 'react'
import { Card, Image, Icon, Reveal, Header, Segment } from 'semantic-ui-react'
import mayoOne from '../images/products/mayo_one.png'
import mayoTwo from '../images/products/mayo_two.jpeg'
import mayoThree from '../images/products/mayo_three.jpeg'
import mayoFour from '../images/products/mayo_four.jpeg'

const Product = (props) => {
  let { id, name, description, size, price } = props.product
  let image;
  switch(name){
    case "Chicken Flavored Mayo":
      image = mayoOne;
      break;
    case "Sriracha Mayo":
      image = mayoTwo;
      break;
    case "Sardine Flavored Mayo":
      image = mayoThree;
      break;
    default:
      image = mayoFour;
  }


  return(
    <Card key={id} className="productCard">
      <Reveal animated="move">
        <Reveal.Content visible>
          <Image src={image} />
        </Reveal.Content>
        <Reveal.Content hidden>

          <Segment>
            <Header textAlign="center" as='h2' onClick={()=>{props.history.push("/wheretobuy")}}>
              Click to find it in stores now!
            </Header>
          </Segment>

        </Reveal.Content>
      </Reveal>

      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Meta>
          <span>
            {size} jar
          </span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='dollar' />
          {price} / jar
        </a>

      </Card.Content>
    </Card>
  )
}

export default Product
