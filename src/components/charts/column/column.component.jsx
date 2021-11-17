import React from 'react';
import Chart from "react-apexcharts";
import './column.style.scss';

const ColumnChart = () => {

    const dataSet = {
        series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43, 10, 15, 25, 30,60]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27, 60, 30, 25, 15, 10]
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
                // show:/ false,
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
            <div className="card column-chart-card">
                <div className="card-body">
                    <div className="card-title">
                        <label htmlFor="">Total earning</label>
                    </div>
                    <div className="chart-price">
                        <h4>$87,240
                            <span className="up">&#9650;02%</span>
                            {/* <span className="down">&#9660;12%</span> */}
                        </h4>
                    </div>

                    <div className="mixed-chart">
                        <Chart
                            options={dataSet.options}
                            series={dataSet.series}
                            type="bar"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColumnChart;
