import React from 'react'
import { Grid, Segment, List } from 'semantic-ui-react'

const UploadProspectStores = () => {



  return(

    <Grid stackable columns={1}>
      <Grid.Column>
        <Segment>
          UPLOAD STORES YOURE TRYING TO SELL INTO
        </Segment>
        <Segment>
          Upload a CSV of stores youre trying to sell into. CSV should have the following headers:
          <List>
            <List.Item>store_name</List.Item>
            <List.Item>address_one</List.Item>
            <List.Item>address_two</List.Item>
            <List.Item>city</List.Item>
            <List.Item>state</List.Item>
            <List.Item>zipcode</List.Item>
            <List.Item>email</List.Item>
          </List>
        </Segment>
        <Segment>
          <label for="file" class="ui icon button">
            <i class="file icon"></i>
            Open File</label>
          <input type="file" id="file" style="display:none">
        </Segment>
      </Grid.Column
    </Grid>


  )
}
