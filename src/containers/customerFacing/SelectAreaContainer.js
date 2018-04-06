import React from 'react'
import AreaSearchForm from '../../components/AreaSearchForm'



const SelectAreaContainer = (props) => {


  return(
    <div>
      <div>FIND PRODUCTS NEAR YOU</div>

      <AreaSearchForm history={props.history}/>

      <div> Choose specific products youre looking for below... </div>
    </div>
  )

}

export default SelectAreaContainer
