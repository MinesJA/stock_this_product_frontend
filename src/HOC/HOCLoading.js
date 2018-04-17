import React, { Component } from 'react'

export default function loader(component){
  console.log("In HOC Loading: ", component)
  return class LoadingComponent extends Component{

    render(){
      const Component = component
      return (
        this.props.loading ? <div>Loading</div> : <Component {...this.props}/>
      )
    }
  }
}
