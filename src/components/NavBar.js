import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = { activeItem: 'whereToBuy' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item name='home' as={NavLink} exact to="/" active={activeItem === 'home'} onClick={()=>{console.log("Clicked home")}} />
        <Menu.Item name='products' as={NavLink} exact to="/products" active={activeItem === 'products'} onClick={()=>{console.log("Clicked home")}} />
        <Menu.Item name='whereToBuy' as={NavLink} exact to="/wheretobuy" active={activeItem === 'whereToBuy'} onClick={this.handleItemClick} />
        <Menu.Item name='about' as={NavLink} exact to="/about" active={activeItem === 'about'} onClick={()=>{console.log("Clicked about")}} />

        <Menu.Menu position='right'>
          <Menu.Item name='admin' as={NavLink} exact to="/login" active={activeItem === 'searchreport'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar
