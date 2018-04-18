import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import Store from './Store'

const StoreList = (props) => {


  const buildStores = () => {
    if(props.stores.length > 0){
      return props.stores.map((store, index)=>{
        return <Store key={index} storeObj={store} />
      })
    }
  }

  return(
    <Card fluid>
      <Card.Content>
        <Card.Header>
          Stores within { props.searchObject ? props.searchObject.radius : null } miles
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>

          {buildStores()}

        </Feed>
      </Card.Content>
    </Card>
  )
}



export default StoreList
