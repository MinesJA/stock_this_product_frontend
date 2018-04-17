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
        <Menu.Item name="Analytics" as={NavLink} exact to={'/analytics'} active={activeItem === 'Analytics'} onClick={this.handleItemClick} />
        <Menu.Item name="Searches Table" as={NavLink} exact to={'/searches'} active={activeItem === 'Searches Table'} onClick={this.handleItemClick} />
        <Menu.Item name="Upload CSV" as={NavLink} exact to={'/csvs/new'} active={activeItem === 'Upload CSV'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          { this.props.currentUser ? <Menu.Item name='user'>Logged in as: {this.props.currentUser.username}</Menu.Item> : null }
          <Menu.Item name='logout'  active={activeItem === 'logout'} onClick={()=>{this.props.logOut(this.props.history)}} />
        </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.Users.currentUser
  }
}

export default connect(mapStateToProps, { logOut })(NavBar)
