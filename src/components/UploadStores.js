import React from 'react'
import { Grid, Segment, List, Input, Radio } from 'semantic-ui-react'

const UploadStores = () => {

  return(
    <Grid stackable columns={1}>
      <Grid.Column>

        <Segment>
          UPLOAD STORES
        </Segment>

        <Segment>
          Upload a CSV of stores you're either currently in or would like to be in (toggle the button below to switch):
          <List>
            <List.Item>store_name</List.Item>
            <List.Item>address_one</List.Item>
            <List.Item>address_two</List.Item>
            <List.Item>city</List.Item>
            <List.Item>state</List.Item>
            <List.Item>zipcode</List.Item>
            <List.Item>phone</List.Item>
            <List.Item>email</List.Item>
          </List>
        </Segment>

        <Segment>
          <label>Toggle on for won stores, off for prospective stores</label>
          <Radio toggle />
        </Segment>

        <Segment>
          <Input
           type="file"
           icon='file text outline'
           iconPosition='left'
           label='Upload CSV'
           labelPosition='right'
           placeholder='UploadCSV...'
         />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default UploadStores
