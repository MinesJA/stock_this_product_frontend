import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux'

class SearchesMessagesByTime extends Component {

  renderData(){
    let dateLabels = []
    let data = []

    this.props.searches.forEach((search) => {
      let date = new Date(search.created_at).toLocaleDateString("en-US")

      if(!dateLabels.includes(date)){
        dateLabels.push(date)
        data.push({x: date, y: 1})
      } else {

        let object = data.find((object) => {return object.x === date})
        object.y += 1
      }

    })

    return {
      labels: dateLabels,
      datasets: [{
        fill: false,
        label: "Searches Over Time",
        backgroundColor: 'red',
        borderColor: 'red',
        data: data
      }]
    }
  }



  render(){
    return(
      <div>
        <Line
          data={this.renderData()}
          width={500}
          height={300}
          options={{
              maintainAspectRatio: false, scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        autoSkip: false,
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 1,
                        max: 50
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
    searches: state.Searches.searches
  }
}

export default connect(mapStateToProps)(SearchesMessagesByTime)
