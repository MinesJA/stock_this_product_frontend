import React from 'react'
import { Grid, Segment, List, Input } from 'semantic-ui-react'

const UploadWonStores = () => {

  return(
    <Grid stackable columns={1}>
      <Grid.Column>
        <Segment>
          UPLOAD STORES YOURE CURRENTLY SELLING INTO
        </Segment>
        <Segment>
          Upload a CSV of stores your products are currently stocked in. CSV should ahve the following headers:
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

export default UploadWonStores
