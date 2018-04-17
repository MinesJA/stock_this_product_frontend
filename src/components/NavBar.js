import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { selectProducer } from '../actions/producersActions'


class NavBar extends Component {
  state = {
    activeItem: 'home',
    producer_id: "",
    producer_options: []
  }

  componentWillReceiveProps = (nextProps) => {
    let producer_options = nextProps.producers.map((producer)=>{
      return {key: producer.name, value: producer.id, text: producer.name}
    })

    this.setState({
      producer_options
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }


  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Dropdown name="producer_id" selection onChange={(e, { name, value })=> this.props.selectProducer(value)} wrapSelection={false} options={this.state.producer_options} />

        <Menu.Item name='home' as={NavLink} exact to={`/`} active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='products' as={NavLink} exact to={`/products`} active={activeItem === 'products'} onClick={this.handleItemClick} />
        <Menu.Item name='whereToBuy' as={NavLink} exact to={`/wheretobuy`} active={activeItem === 'whereToBuy'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          { this.props.currentUser ? <Menu.Item name='user'> Logged in as: {this.props.user} </Menu.Item> : null }
          <Menu.Item name='admin' as={NavLink} exact to={'/login'} active={activeItem === 'searchreport'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.Users.currentUser,
    producers: state.Producers.producers
  }
}

export default connect(mapStateToProps, { selectProducer })(NavBar)
