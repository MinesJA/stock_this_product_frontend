import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { logOut } from '../actions/usersActions'
import { connect } from 'react-redux'

class NavBar extends Component {
  state = { activeItem: 'whereToBuy' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item name="uploadcsv" as={NavLink} exact to="/csvs" active={activeItem === 'uploadcsv'} onClick={this.handleItemClick} />
        <Menu.Item name="searchesreport" as={NavLink} exact to="/searches" active={activeItem === 'searchesreport'} onClick={this.handleItemClick} />
        <Menu.Item name="messagesreport" as={NavLink} exact to="/messages" active={activeItem === 'messagesreport'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item name='logout'  active={activeItem === 'logout'} onClick={()=>{this.props.logOut()}} />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default connect(null, { logOut })(NavBar)
