import React, { useEffect } from 'react';
import Chart from "react-apexcharts";
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import './analysis-dashboard.style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

const AnalysisDashboard = () => {

    // FOR REDIAL CHART
    const dataSet = {
        series: [40, 60, 65, 70, 76],
        options: {
            chart: {
                // height: 50,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    colors: ['#5C86C1', '#3FB7F3', '#81CAB2', '#F9D456', '#FDA747'],
                    startAngle: -180,
                    endAngle: 180,
                    hollow: {
                        margin: 5,
                        size: '50%',
                        image: 'assets/images/analisys-redial-chart.svg',
                        imageWidth: 60,
                        imageHeight: 60,
                        imageClipped: false
                    },
                    track: {
                        show: true,
                        startAngle: undefined,
                        endAngle: undefined,
                        background: '#F5F5F5',
                        strokeWidth: '97%',
                        opacity: 1,
                        margin: 9,
                        dropShadow: {
                            enabled: false,
                            top: 0,
                            left: 0,
                            blur: 3,
                            opacity: 1
                        }
                    },
                    dataLabels: {
                        name: {
                            fontSize: '10px',
                            lineHeight: '24px'
                        },
                        value: {
                            fontSize: '10px',
                            lineHeight: '24px'
                        },
                        total: {
                            fontSize: '12px',
                            show: true,
                            label: 'EXPENSES',
                            formatter: function (w) {
                                // return 55
                            }
                        }
                    }
                }
            },
            legend: {
                show: true,
                floating: true,
                fontSize: '11px',
                position: 'left',
                'z-index': 12,
                margin: 1,
                offsetX: 250,
                offsetY: 280,
                labels: {
                    useSeriesColors: false,
                },
                markers: {
                    size: 5,
                    fillColors: ['#FDA747', '#F9D456', '#81CAB2', '#3FB7F3', '#5C86C1'],
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                    vertical: 1
                }
            },
            labels: ['Housing', 'Transportation', 'Food', 'Medical', 'Other'],
            fill: {
                colors: ['#5C86C1', '#3FB7F3', '#81CAB2', '#F9D456', '#FDA747'],
            },
            stroke: {
                lineCap: 'round'
            },
        },
    };


    // FOR COLUMN CHART
    const dataSet2 = {
        series: [{
            name: 'Living Wage',
            data: [17.3, 17.3, 17.3, 17.3, 17.3, 17.3, 17.3, 17.3, 15, 17.3, 17.3, 17.3]
        }, {
            name: 'Employee Wage',
            data: [25, 35, 30, 50, 25, 35, 25, 37, 0, 25, 32, 35]
        },],
        options: {
            tooltip: {
                enabled: true
            },
            colors: ['#81CAB2', '#5C86C1'],
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
                    // horizontal: false,
                    columnWidth: '10%',
                    borderRadius: 7,
                    ranges: [{
                        from: 20,
                        to: 100,
                        color: '#F15B46'
                    }, {
                        from: 0,
                        to: 20,
                        color: '#FEB019'
                    }]
                },
            },
            xaxis: {
                categories: ['1 Adult 0 Kids', '1 Adult 1 Kid', '1 Adult 2 Kids', '1 Adult 3 Kids', '2 Adults(1 Working) 0 Kids', '2 Adults(1 Working) 1 Kid', '2 Adults(1 Working) 2 Kids', '2 Adults(1 Working) 3 Kids', '2 Adults(1 Working) 3 Kids', '2 Adults(Both Working) 0 Kids', '2 Adults(Both Working) 1 Kid', '2 Adults(Both Working) 2 Kid', '2 Adults(Both Working) 3 Kid'],
                // show: false,
                labels: {
                    show: true,
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
                    show: true,
                },
                lines: {
                    show: false
                }
            },
        }
    }

    // FOR MAPBOX
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiYmFzYWxzbWFydHNvbHV0aW9ucyIsImEiOiJja3ZpZ2NtanNjazA3MnZuemt4ZnF6b2FoIn0.0oul5wnWu-7L_2HB0PTzCg'
    });

    // FOR INPUT FLOATING LABEL
    const handleFocus = (e) => {
        e.target.classList.add("hasFocus");
    }

    const handleBlur = (e) => {
        if (e.target.value === "") {
            e.target.classList.remove("hasFocus");
        }
    }

    return (
        <>
            <section className="analysis-dashboard-sec">
                <div className="container-md">
                    <div className="row title-filter-row">
                        <div className="col col-4">
                            <h3 className="page-title">Living Wage Analysis</h3>
                        </div>
                        <div className="col col-8">
                            <div className="analysis-filter-wrapper">
                                <div className="analysis-filter-item msa">
                                    <div className="input-item ">
                                        {/* <select onFocus={handleFocus} onBlur={handleBlur} style={{backgroundImage:'url(assets/images/select-arrow.svg)'}}> */}
                                        {/* <select onFocus={handleFocus} onBlur={handleBlur}>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                            <option value="">Option 3</option>
                                        </select> */}
                                        <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
                                        <label htmlFor="">Select MSA</label>
                                    </div>
                                </div>
                                <div className="analysis-filter-item household">
                                    <div className="input-item ">
                                        <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
                                        <label htmlFor="">Select Household</label>
                                    </div>
                                </div>
                                <div className="analysis-filter-item wage">
                                    <div className="input-item ">
                                        <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
                                        <label htmlFor="">Hourly Wage</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row chart-row">
                        <div className="col col-4">
                            <div className="card map-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label htmlFor="">Indianapolis, IN</label>
                                    </div>
                                    <div className="card-content">
                                        <Map
                                            style="mapbox://styles/basalsmartsolutions/ckw232our0h7q14qs4h6yv2bx"
                                            containerStyle={{
                                                height: '100%',
                                                width: '100%'
                                            }}
                                            zoom={[0.5]}
                                        >
                                            <Marker
                                                coordinates={[-95.550000, 38.770000]}
                                                anchor="bottom">
                                                <img src="assets/images/logo-icon.png" />
                                            </Marker>
                                            {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                                                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                                            </Layer> */}
                                        </Map>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-8">
                            <div className="card analysis-column-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label htmlFor="">Living Wage Calculator</label>
                                    </div>
                                    <div className="card-content">
                                        <Chart
                                            options={dataSet2.options}
                                            series={dataSet2.series}
                                            type="bar"
                                            width="100%"
                                            height="100%"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row overview-income-row">
                        <div className="col col-4">
                            <div className="card overview-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label htmlFor="">Indianapolis Market Overview</label>
                                    </div>
                                    <ul>
                                        <li>
                                            <span className="name">Population</span>
                                            <span className="value">892,071</span>
                                        </li>
                                        <li>
                                            <span className="name">5 Year Population Growth Rate</span>
                                            <span className="value">4.0%</span>
                                        </li>
                                        <li>
                                            <span className="name">Labor Force</span>
                                            <span className="value">63%</span>
                                        </li>
                                        <li>
                                            <span className="name">Unemployed</span>
                                            <span className="value">53,366</span>
                                        </li>
                                        <li>
                                            <span className="name">Unemployed Percent</span>
                                            <span className="value">4.6%</span>
                                        </li>
                                        <li>
                                            <span className="name">Average Commute Time</span>
                                            <span className="value">27 min</span>
                                        </li>
                                        <li>
                                            <span className="name">Median Home Price</span>
                                            <span className="value">$217K</span>
                                        </li>
                                        <li>
                                            <span className="name">1 Adult, 0 Children Monthly Housing Rate</span>
                                            <span className="value">$651</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="card annual-income-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label htmlFor="">Annual Income</label>
                                        <span className="sub-text">1 Adult, 0 Kids</span>
                                    </div>
                                    <div className="card-content">
                                        <div className="employee-salary">
                                            <label htmlFor="">Employee Annual Salary</label>
                                            <p>$35,984</p>
                                        </div>
                                        <div className="annual-salary-progress-wrapper">
                                            <div className="annual-salary-progress">
                                                <ul>
                                                    <li>
                                                        <span style={{ width: '100%', backgroundColor: '#5C86C1' }}>
                                                            <small>
                                                                $29,035
                                                            </small>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M20 6H23V8H22V19H23V21H1V19H2V8H1V6H4V4C4 3.73478 4.10536 3.48043 4.29289 3.29289C4.48043 3.10536 4.73478 3 5 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289C19.8946 3.48043 20 3.73478 20 4V6ZM20 8H4V19H7V12H9V19H11V12H13V19H15V12H17V19H20V8ZM6 5V6H18V5H6Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span style={{ width: '80%', backgroundColor: '#3FB7F3' }}>
                                                            <small>
                                                                $23,998
                                                            </small>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22 21H2V19H3V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H18C18.2652 3 18.5196 3.10536 18.7071 3.29289C18.8946 3.48043 19 3.73478 19 4V9H21V19H22V21ZM17 19H19V11H13V19H15V13H17V19ZM17 9V5H5V19H11V9H17ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM7 7H9V9H7V7Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span style={{ width: '30%', backgroundColor: '#81CAB2' }}>
                                                            <small>
                                                                $5,038
                                                            </small>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM4 8.236V9H20V8.236L12 4.236L4 8.236ZM12 8C11.7348 8 11.4804 7.89464 11.2929 7.70711C11.1054 7.51957 11 7.26522 11 7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6C12.2652 6 12.5196 6.10536 12.7071 6.29289C12.8946 6.48043 13 6.73478 13 7C13 7.26522 12.8946 7.51957 12.7071 7.70711C12.5196 7.89464 12.2652 8 12 8Z" fill="white" />
                                                            </svg>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="annual-salary-indicator">
                                                <ul>
                                                    <li><span className="circle" style={{ backgroundColor: '#5c86c1', }}></span><label className="label">Required Annual Income Before Taxes</label></li>
                                                    <li><span className="circle" style={{ backgroundColor: '#3fb7f3', }}></span><label className="label">Required Annual Income After Taxes</label></li>
                                                    <li><span className="circle" style={{ backgroundColor: '#81cab2', }}></span><label className="label">Annual Taxes</label></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="card annual-income-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label htmlFor="">Typical Monthly Expenses</label>
                                        <span className="sub-text">1 Adult, 0 Kids</span>
                                    </div>
                                    <div className="card-content">
                                        <div className="mixed-chart radialbars-chart">
                                            <Chart
                                                options={dataSet.options}
                                                series={dataSet.series}
                                                type="radialBar"

                                            // height="56px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AnalysisDashboard;
