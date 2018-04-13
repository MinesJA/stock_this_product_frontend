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
        <Menu.Item name="CSV Upload" as={NavLink} exact to="/csvs" active={activeItem === 'CSV Upload'} onClick={this.handleItemClick} />
        <Menu.Item name="Analytics" as={NavLink} exact to="/analytics" active={activeItem === 'Analytics'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item name='logout'  active={activeItem === 'logout'} onClick={()=>{this.props.logOut()}} />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default connect(null, { logOut })(NavBar)
