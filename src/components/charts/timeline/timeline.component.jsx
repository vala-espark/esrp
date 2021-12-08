import React from 'react';
import Chart from "react-apexcharts";
import './timeline.style.scss'

const TimelineChart = () => {

    const dataSet = {
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43, 10, 15, 25, 30, 60, 35, 32, 55, 45, 75, 58, 40, 23, 44, 55, 41, 67, 22, 43, 10, 15, 25, 30, 60, 35, 32,]
        },],
        options: {
            tooltip: {
                enabled: false
            },
            chart: {
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                show: false
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    // borderRadius: 45,
                },
            },
            xaxis: {
                show: false,
                labels: {
                    show: false,
                },
                lines: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false,
                },
                lines: {
                    show: false
                }
            },
        },
    }

    return (
        <>
            <div className="card time-line-chart-card">
                <div className="card-body">
                    <div className="card-content">
                        <div className="card-title">
                            <label htmlFor="">Data Title</label>
                        </div>
                        <div className="chart-price">
                            <h4>$87,240
                                {/* <span className="up">&#9650;02%</span> */}
                                {/* <span className="down">&#9660;12%</span> */}
                            </h4>
                        </div>
                    </div>

                    <div className="mixed-chart">
                        <Chart
                            options={dataSet.options}
                            series={dataSet.series}
                            type="bar"
                            width="100%"
                            height="100px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimelineChart;
