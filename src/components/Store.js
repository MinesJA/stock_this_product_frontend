import React from 'react'
import { Feed, List, Button } from 'semantic-ui-react'
import { messageStore } from '../actions/storesActions'
import { connect } from 'react-redux'

const Store = (props) => {

  let { id, name, address_one, city, state, zipcode, phone, email, buys } = props.storeObj

  const emailThem = (e) => {

    props.messageStore(id)
  }

  return(
    <Feed.Event>
      <Feed.Label image='src/images/grocery_store.jpeg' />
      <Feed.Content>
        <Feed.Summary>

          <List>
            <List.Item>
              <List.Header>
                {name}
              </List.Header>
            </List.Item>

            <List.Item>
              <List.Content>
                {address_one}
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content>
                {city}, {state} {zipcode}
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Content>
                {phone} | {email}
              </List.Content>
            </List.Item>

            { buys ?
              null
                :
              <List.Item>
                <List.Content>
                  <Button size='medium' primary onClick={emailThem}>Email Them!</Button>
                </List.Content>
              </List.Item>
            }

          </List>

        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  )
}



export default connect(null, { messageStore })(Store)
