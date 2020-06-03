import React, { Component } from 'react';
import {Bar,Pie,Line} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["SWEDEN","DENMARK"],
                datasets: [
                    {
                        label: "Population",
                        data: [
                            1800,
                            200,
                            0
                        ],
                        backgroundColor: [
                            'rgba(75,192,192,1)',
                            'rgba(255, 206, 86, 1)'
                        ]
                    }
                ]
            }
        }
    }
 
    render() { 
        return ( 

            <div className="chart">
                <Bar
                data={this.state.chartData}
       
                options={{maintainAspectRatio: false
                }}
/>
            </div>

         );
    }
}
 
export default Chart;