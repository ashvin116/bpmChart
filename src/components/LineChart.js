import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import moment from 'moment'

function LineChart({ chartData,chartData2 }) {
    // console.log(chartData);
    
    return (
        <>
            <Line 
                data={chartData}
            />
             <Line 
                data={chartData2}
            />
        </>
    )
}

export default LineChart;