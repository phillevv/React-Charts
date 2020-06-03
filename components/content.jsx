import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Bar} from 'react-chartjs-2';
import Chart from './chart';




class Content extends Component {
 
    render() { 

        return (

        <div className="Content">

                <div className="shadow-sm p-3 mb-5 bg-white rounded m-5">

                <div className="text-center">
                    <p>Hej</p>
                <Button variant="info">Info</Button>
                <Chart></Chart>
                
                </div>
                </div>
        </div>
        );
}
}

 
export default Content;