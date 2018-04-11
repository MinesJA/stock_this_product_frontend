import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import Store from './Store'

const StoreList = (props) => {


  const buildStores = () => {
    if(props.stores.length > 0){
      return props.stores.map((store, index)=>{
        let { name, address_one, city, state, zipcode, phone, email, buys } = store
        let storeObj = { name, address_one, city, state, zipcode, phone, email, buys }

        return <Store key={index} storeObj={storeObj} />
      })
    }
  }

  console.log(props.searchObject)
  return(
    <Card>
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
