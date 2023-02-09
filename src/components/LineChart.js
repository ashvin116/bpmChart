import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, chartData2 }) {

    const options = {
        scales: {
            y: {
                min: 0
            }
        }

    };


    return (
        <>
            <Line
                data={chartData}
                options={options}
            />
            <Line
                data={chartData2}
                options={options}
            />
        </>
    )
}

export default LineChart;