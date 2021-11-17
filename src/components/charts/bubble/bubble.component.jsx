import React, { Component } from "react";
import Chart from "react-apexcharts";
import './bubble.style.scss';


const BubbleChart = () => {
    
    const generateData = (count, yrange) => {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y = parseInt(x);

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        console.log(series);
        return series;
    }
    
    const dataSet = {
        series: [{
            name: 'Bubble1',
            data: generateData(20, 30, {
                min: 10,
                max: 60
            })
        }],
        options: {
            chart: {
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            title: {
                text: 'Simple Bubble Chart'
            },
            xaxis: {
                tickAmount: 12,
                type: 'category',
            },
            yaxis: {
                max: 70
            }
        },
    }

    return (
        <>
            <div className="card bubble-chart-card">
                <div className="card-body">
                    <div className="card-title">
                        <label htmlFor="">Data Set Title</label>
                    </div>

                    <div className="mixed-chart">
                        <Chart
                            options={dataSet.options}
                            series={dataSet.series}
                            type="bubble"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BubbleChart;
