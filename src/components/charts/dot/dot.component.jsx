import React from 'react';
import Chart from "react-apexcharts";
import './dot.style.scss'

const DotChart = () => {

    const dataSet = {
        series: [{
            // data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120]
            data: [
                [0, 450],
                [16.4, 450],
                [16.4, 450],
                [16.4, 450],
                [16.4, 450],
            ]
          }],
          chart: {
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Jan', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            tickAmount: 10  // optional tickAmount value
          },
        options: {
            tooltip: {
                enabled: false
            },
            chart: {
                zoom: {
                    enabled: false,
                }
            },
        }
        //     xaxis: {
        //         categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        //         tickAmount: 10  // optional tickAmount value
        //       },
        //     // xaxis: {
        //     //     tickAmount: 10,
        //     //     // type: 'category',
        //     //     categories: ['jan', 'feb', 'mar','apr', 'may', 'jun', 'jul', 'agu', 'sep', 'oct', 'nov', 'dec'],
        //     //     // labels: {
        //     //     //     formatter: function (val) {
        //     //     //         return parseFloat(val).toFixed(1)
        //     //     //     }
        //     //     // }
        //     // },
        //     yaxis: {
        //         tickAmount: 7
        //     }
        // },
        // options: {
        // tooltip: {
        //     enabled: false
        // },
        //     chart: {
        //         stacked: true,
        //         toolbar: {
        //             show: false
        //         },
        //         zoom: {
        //             enabled: false
        //         }
        //     },
        //     legend: {
        //         show: false
        //     },
        //     dataLabels: {
        //         enabled: false
        //     },
        //     grid: {
        //         show: false
        //     },
        //     plotOptions: {
        //         bar: {
        //             horizontal: false,
        //         },
        //     },
        //     xaxis: {
        //         show: false,
        //         labels: {
        //             show: false,
        //         },
        //         lines: {
        //             show: false
        //         },
        //         axisTicks: {
        //             show: false
        //         }
        //     },
        //     yaxis: {
        //         labels: {
        //             show: false,
        //         },
        //         lines: {
        //             show: false
        //         }
        //     },
        // },
    }

    return (
        <>
            <div className="card dot-chart-card">
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
                            type="scatter"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DotChart;
