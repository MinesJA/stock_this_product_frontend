import React from 'react'
import { Feed, List, Button, Icon } from 'semantic-ui-react'
import { messageStore } from '../actions/storesActions'
import { connect } from 'react-redux'

const Store = (props) => {

  let { id, name, address_one, city, state, zipcode, phone, email, buys } = props.storeObj

  const emailThem = (e) => {

    props.messageStore(id)
  }

  return(
    <Feed.Event>
      <Feed.Label>
        <Icon name="food" />
      </Feed.Label>

      <Feed.Content>
        <Feed.Summary>
          {name}
        </Feed.Summary>
        <Feed.Extra>
          <List>
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
                  <Button size='medium' color="red" onClick={emailThem}>Email Them!</Button>
                </List.Content>
              </List.Item>
            }

          </List>
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  )
}



export default connect(null, { messageStore })(Store)
