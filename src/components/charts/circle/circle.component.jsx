import React from 'react';
import Chart from "react-apexcharts";
import './circle.styl.scss';

const CircleChart = () => {

    const dataSet = {
        series: [32],
        options: {
            tooltip: {
                    enabled: false
                  },
            chart: {
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '90%',
                    }
                },
            },
            labels: [''],
        },
    };

    const dataSet2 = {
        series: [49],
        options: {
            tooltip: {
                    enabled: false
                  },
            chart: {
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '90%',
                    }
                },
            },
            labels: [''],
        },
    };

    const dataSet3 = {
        series: [79],
        options: {
            tooltip: {
                    enabled: false
                  },
            chart: {
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '90%',
                    }
                },
            },
            labels: [''],
        },
    };

    return (
        <>
            <div className="card circle-chart-card">
                <div className="card-body">
                    <div className="card-title">
                        <label htmlFor="">Living Wage Calculator</label>
                    </div>
                    <ul className="circle-chart-items">
                        <li className="circle-chart-item">
                            <div className="mixed-chart">
                                <Chart
                                    options={dataSet.options}
                                    series={dataSet.series}
                                    type="radialBar"
                                    width="100%"
                                    // height="56px"
                                />
                            </div>
                            <div className="chart-data">
                                <div className="chart-data-title">
                                    <label htmlFor="">Annual limit</label>
                                </div>
                                <div className="chart-price">
                                    <h6>$95,214
                                        <span className="up">&#9650;10%</span>
                                        {/* <span className="down">&#9660;12%</span> */}
                                    </h6>
                                </div>
                            </div>
                        </li>
                        <li className="circle-chart-item">
                            <div className="mixed-chart">
                                <Chart
                                    options={dataSet2.options}
                                    series={dataSet2.series}
                                    type="radialBar"
                                    width="100%"
                                    // height="56px"
                                />
                            </div>
                            <div className="chart-data">
                                <div className="chart-data-title">
                                    <label htmlFor="">Monthly limit</label>
                                </div>
                                <div className="chart-price">
                                    <h6>$95,214
                                        {/* <span className="up">&#9650;10%</span> */}
                                        <span className="down">&#9660;10%</span>
                                    </h6>
                                </div>
                            </div>
                        </li>
                        <li className="circle-chart-item">
                            <div className="mixed-chart">
                                <Chart
                                    options={dataSet3.options}
                                    series={dataSet3.series}
                                    type="radialBar"
                                    width="100%"
                                    // height="56px"
                                />
                            </div>
                            <div className="chart-data">
                                <div className="chart-data-title">
                                    <label htmlFor="">Weekly limit</label>
                                </div>
                                <div className="chart-price">
                                    <h6>$95,214
                                        <span className="up">&#9650;10%</span>
                                        {/* <span className="down">&#9660;12%</span> */}
                                    </h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CircleChart;
