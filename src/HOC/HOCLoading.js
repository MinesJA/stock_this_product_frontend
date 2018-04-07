import React from 'react';

function HOCLoading(Component){
  return function WithLoadingComponent({ loading, ...props}){

    if(!loading){
      return (<Component {...props} />);
    } else {
      return (<p>Loading...</p>);
    }
  }
}

export default HOCLoading;
