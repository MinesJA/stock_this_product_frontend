import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


class SearchesMessagesByStore extends Component {
  state = {
    data: {
            labels: ["Store 1", "Store 2", "Store 3", "Store 4", "Store 5"],
            datasets: [{
              label: "First Dataset",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [10, 15, 60, 30, 5]
            }]
          }
        }

  componentDidMount(){
    
  }

  render(){
    return(
      <div>
        <Bar
        	data={this.state.data}
        	width={500}
        	height={300}
        	options={{maintainAspectRatio: false}}
        />
      </div>
    )
  }

}

export default SearchesMessagesByStore
