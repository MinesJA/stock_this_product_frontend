import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'


class SearchesMessagesByStore extends Component {
  state = {toggleWon: false}



  renderData(){
    let toggleWon = this.props.toggleWon
    let prospectStores = this.props.prospectStores
    let wonStores = this.props.wonStores

    let sortedWon = wonStores.sort((a,b)=>{return a.search_hit - b.search_hit})
    let topFiveWon = sortedWon.slice(sortedWon.length - 5, sortedWon.length)

    let sortedProspect = prospectStores.sort((a,b)=>{return a.search_hit - b.search_hit})
    let topFiveProspect = sortedProspect.slice(sortedProspect.length - 5, sortedProspect.length)



    if (toggleWon) {
      let storeNames = topFiveWon.map((store)=>{return store.name})
      let storeData = topFiveWon.map((store)=>{return store.search_hit})
      return {
              labels: storeNames,
              datasets: [{
                label: "Won stores",
                backgroundColor: 'blue',
                borderColor: 'blue',
                data: storeData
              }]
            }
    } else {
      let storeNames = topFiveProspect.map((store)=>{return store.name})
      let storeData = topFiveProspect.map((store)=>{return store.search_hit})
      return {
              labels: storeNames,
              datasets: [{
                label: "Prospective Stores",
                backgroundColor: 'green',
                borderColor: 'green',
                data: storeData
              }]
            }
    }
  }



  render(){
    return(
      <div>
        <Bar
        	data={this.renderData()}
        	width={500}
        	height={300}
        	options={{
              maintainAspectRatio: false, scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        autoSkip: false,
                        beginAtZero: true
                      }
                    }],
                xAxes: [{ticks: {autoSkip: false}}]
              }
              }}
        />
      </div>

    )
  }
}

function mapStateToProps(state){
  return{
    wonStores: state.Stores.wonStores,
    prospectStores: state.Stores.prospectStores
  }
}

export default connect(mapStateToProps)(SearchesMessagesByStore)
