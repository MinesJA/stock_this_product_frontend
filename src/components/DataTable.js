import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'


class DataTable extends Component {
  state = {
    panes: [
      { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
      { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    ]
  }




  render(){
    return(
      <div>
        <Tab panes={this.state.panes} />
      </div>
    )
  }
}



export default DataTable



    // t.string "ip"
    // t.text "location_data"
    // t.string "search_term"
    // t.integer "radius"
    // t.integer "producer_id"
    // t.datetime "created_at", null: false
    // t.datetime "updated_at", null: false
    // t.decimal "latitude", precision: 10, scale: 7
    // t.decimal "longitude", precision: 10, scale: 7

    // t.string "customer_email"
    // t.string "store_email"
    // t.text "email_subject"
    // t.text "email_body"
    // t.integer "search_id"
    // t.integer "producer_id"
    // t.datetime "created_at", null: false
    // t.datetime "updated_at", null: false
