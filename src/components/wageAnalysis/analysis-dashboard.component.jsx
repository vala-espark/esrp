import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import './analysis-dashboard.style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { selectThemeSetting } from "../../redux/theme/theme.selector";
import { setThemeSetting } from "../../redux/theme/theme.action";
import Input from '../control-component/input';

import Select from '../control-component/selectBox'

const AnalysisDashboard = ({ theme, setThemeSetting }) => {

    const [mapColor, setMapColor] = useState('');
    const [selectBox, setSelectBox] = useState();
    const [houseHold, setHouseHold] = useState();

    // let mapColor;
    console.log('theme color', theme);

    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme.theme_color);

        if (theme.theme_color === 'esrp-theme') {
            setMapColor('mapbox://styles/basalsmartsolutions/ckvtyjs1z2hcx14oyb5axlvlc')
        }
        if (theme.theme_color === 'light-theme') {
            // setMapColor('mapbox://styles/basalsmartsolutions/ckvill2q0ase614pc0iiwkd2y'); //OLD
            setMapColor('mapbox://styles/basalsmartsolutions/ckw232our0h7q14qs4h6yv2bx')
        }
        if (theme.theme_color === 'dark-theme') {
            // setMapColor('mapbox://styles/basalsmartsolutions/ckw36chtz0sel14mwd6cawuut'); //OLD
            setMapColor('mapbox://styles/basalsmartsolutions/ckw219z4h1r7s14qtbw4fz3x8');
        }

    }, [theme.theme_color]);


    useEffect(() => {
        var mainDiv = document.getElementsByTagName('foreignObject')[0].nextElementSibling;
        var childDiv = document.getElementsByTagName('foreignObject')[0];
        insertAfter(childDiv, mainDiv)
        function insertAfter(newNode, referenceNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
    }, [])

    // FOR REDIAL CHART
    const dataSet = {
        series: [40, 60, 65, 70, 76],
        options: {
            chart: {
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
                    // fillColors: ['#FDA747', '#F9D456', '#81CAB2', '#3FB7F3', '#5C86C1'],
                    fillColors: ['#5C86C1', '#3FB7F3', '#81CAB2', '#F9D456', '#FDA747'],
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                    vertical: 1
                },
                inverseOrder: true,
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
            data: [17, 17, 17, 17, 17, 17, 17, 17, 15, 17, 17, 17]
        }, {
            name: 'Employee Wage',
            data: [25, 35, 30, 50, 25, 35, 25, 37, 15, 25, 32, 35]
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
                categories: [
                    ['1 Adult', '0 Kids'],
                    ['1 Adult', '1 Kid'],
                    ['1 Adult', '2 Kids'],
                    ['1 Adult', '3 Kids'],
                    ['2 Adults', '(1 Working)', '0 Kids'],
                    ['2 Adults', '(2 Working)', '1 Kid'],
                    ['2 Adults', '(1 Working)', '2 Kids'],
                    ['2 Adults', '(1 Working)', '3 Kids'],
                    ['2 Adults', '(Both Working)', '0 Kids'],
                    ['2 Adults', '(Both Working)', '1 Kid'],
                    ['2 Adults', '(Both Working)', '2 Kid'],
                    ['2 Adults', '(Both Working)', '3 Kid']

                ],
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

                                    <Select
                                        selectItem={selectBox}
                                        setSelectedItem={setSelectBox}
                                        lableName="Select MSA"
                                        selectIcon={
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.6429 1H2.35714C1.99732 1.00036 1.65233 1.14346 1.39789 1.39789C1.14346 1.65233 1.00036 1.99732 1 2.35714V18.6429C1.00036 19.0027 1.14346 19.3477 1.39789 19.6021C1.65233 19.8565 1.99732 19.9996 2.35714 20H18.6429C19.0027 19.9996 19.3477 19.8565 19.6021 19.6021C19.8565 19.3477 19.9996 19.0027 20 18.6429V2.35714C19.9996 1.99732 19.8565 1.65233 19.6021 1.39789C19.3477 1.14346 19.0027 1.00036 18.6429 1ZM18.6429 9.14286H15.25V2.35714H18.6429V9.14286ZM10.5 2.35714H13.8929V9.14286H10.5V2.35714ZM9.14286 2.35714V13.2143H2.35714V2.35714H9.14286ZM2.35714 14.5714H9.14286V18.6429H2.35714V14.5714ZM10.5 18.6429V10.5H18.6429V18.6429H10.5Z" fill="#5C86C1" stroke="#5C86C1" stroke-width="0.5" />
                                            </svg>
                                        }
                                        options={["Large", "Small", "Medium", "X - Large"]}
                                        optionsIcon={{
                                            Large:
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 10C7.66304 10 8.29893 9.73661 8.76777 9.26777C9.23661 8.79893 9.5 8.16304 9.5 7.5C9.5 6.83696 9.23661 6.20107 8.76777 5.73223C8.29893 5.26339 7.66304 5 7 5C6.33696 5 5.70107 5.26339 5.23223 5.73223C4.76339 6.20107 4.5 6.83696 4.5 7.5C4.5 8.16304 4.76339 8.79893 5.23223 9.26777C5.70107 9.73661 6.33696 10 7 10ZM7 12C6.40905 12 5.82389 11.8836 5.27792 11.6575C4.73196 11.4313 4.23588 11.0998 3.81802 10.682C3.40016 10.2641 3.06869 9.76804 2.84254 9.22208C2.6164 8.67611 2.5 8.09095 2.5 7.5C2.5 6.90905 2.6164 6.32389 2.84254 5.77792C3.06869 5.23196 3.40016 4.73588 3.81802 4.31802C4.23588 3.90016 4.73196 3.56869 5.27792 3.34254C5.82389 3.1164 6.40905 3 7 3C8.19347 3 9.33807 3.47411 10.182 4.31802C11.0259 5.16193 11.5 6.30653 11.5 7.5C11.5 8.69347 11.0259 9.83807 10.182 10.682C9.33807 11.5259 8.19347 12 7 12ZM17.5 14C18.0304 14 18.5391 13.7893 18.9142 13.4142C19.2893 13.0391 19.5 12.5304 19.5 12C19.5 11.4696 19.2893 10.9609 18.9142 10.5858C18.5391 10.2107 18.0304 10 17.5 10C16.9696 10 16.4609 10.2107 16.0858 10.5858C15.7107 10.9609 15.5 11.4696 15.5 12C15.5 12.5304 15.7107 13.0391 16.0858 13.4142C16.4609 13.7893 16.9696 14 17.5 14ZM17.5 16C16.4391 16 15.4217 15.5786 14.6716 14.8284C13.9214 14.0783 13.5 13.0609 13.5 12C13.5 10.9391 13.9214 9.92172 14.6716 9.17157C15.4217 8.42143 16.4391 8 17.5 8C18.5609 8 19.5783 8.42143 20.3284 9.17157C21.0786 9.92172 21.5 10.9391 21.5 12C21.5 13.0609 21.0786 14.0783 20.3284 14.8284C19.5783 15.5786 18.5609 16 17.5 16ZM20 22V21.5C20 20.837 19.7366 20.2011 19.2678 19.7322C18.7989 19.2634 18.163 19 17.5 19C16.837 19 16.2011 19.2634 15.7322 19.7322C15.2634 20.2011 15 20.837 15 21.5V22H13V21.5C13 20.9091 13.1164 20.3239 13.3425 19.7779C13.5687 19.232 13.9002 18.7359 14.318 18.318C14.7359 17.9002 15.232 17.5687 15.7779 17.3425C16.3239 17.1164 16.9091 17 17.5 17C18.0909 17 18.6761 17.1164 19.2221 17.3425C19.768 17.5687 20.2641 17.9002 20.682 18.318C21.0998 18.7359 21.4313 19.232 21.6575 19.7779C21.8836 20.3239 22 20.9091 22 21.5V22H20ZM10 22V18C10 17.2044 9.68393 16.4413 9.12132 15.8787C8.55871 15.3161 7.79565 15 7 15C6.20435 15 5.44129 15.3161 4.87868 15.8787C4.31607 16.4413 4 17.2044 4 18V22H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13C8.32608 13 9.59785 13.5268 10.5355 14.4645C11.4732 15.4021 12 16.6739 12 18V22H10Z" fill="#5C86C1" />
                                                </svg>
                                            ,
                                            Small:
                                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 7L7 0.999999L1 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>,

                                        }} />
                                </div>
                                <div className="analysis-filter-item household">
                                    <Select
                                        selectItem={houseHold}
                                        setSelectedItem={setHouseHold}
                                        lableName="Select Household"
                                        options={["1 Adult 0 kids", "1 Adult 0 kids", "1 Adult 0 kids", "1 Adult 0 kids"]}
                                        selectIcon={
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 10C7.66304 10 8.29893 9.73661 8.76777 9.26777C9.23661 8.79893 9.5 8.16304 9.5 7.5C9.5 6.83696 9.23661 6.20107 8.76777 5.73223C8.29893 5.26339 7.66304 5 7 5C6.33696 5 5.70107 5.26339 5.23223 5.73223C4.76339 6.20107 4.5 6.83696 4.5 7.5C4.5 8.16304 4.76339 8.79893 5.23223 9.26777C5.70107 9.73661 6.33696 10 7 10ZM7 12C6.40905 12 5.82389 11.8836 5.27792 11.6575C4.73196 11.4313 4.23588 11.0998 3.81802 10.682C3.40016 10.2641 3.06869 9.76804 2.84254 9.22208C2.6164 8.67611 2.5 8.09095 2.5 7.5C2.5 6.90905 2.6164 6.32389 2.84254 5.77792C3.06869 5.23196 3.40016 4.73588 3.81802 4.31802C4.23588 3.90016 4.73196 3.56869 5.27792 3.34254C5.82389 3.1164 6.40905 3 7 3C8.19347 3 9.33807 3.47411 10.182 4.31802C11.0259 5.16193 11.5 6.30653 11.5 7.5C11.5 8.69347 11.0259 9.83807 10.182 10.682C9.33807 11.5259 8.19347 12 7 12ZM17.5 14C18.0304 14 18.5391 13.7893 18.9142 13.4142C19.2893 13.0391 19.5 12.5304 19.5 12C19.5 11.4696 19.2893 10.9609 18.9142 10.5858C18.5391 10.2107 18.0304 10 17.5 10C16.9696 10 16.4609 10.2107 16.0858 10.5858C15.7107 10.9609 15.5 11.4696 15.5 12C15.5 12.5304 15.7107 13.0391 16.0858 13.4142C16.4609 13.7893 16.9696 14 17.5 14ZM17.5 16C16.4391 16 15.4217 15.5786 14.6716 14.8284C13.9214 14.0783 13.5 13.0609 13.5 12C13.5 10.9391 13.9214 9.92172 14.6716 9.17157C15.4217 8.42143 16.4391 8 17.5 8C18.5609 8 19.5783 8.42143 20.3284 9.17157C21.0786 9.92172 21.5 10.9391 21.5 12C21.5 13.0609 21.0786 14.0783 20.3284 14.8284C19.5783 15.5786 18.5609 16 17.5 16ZM20 22V21.5C20 20.837 19.7366 20.2011 19.2678 19.7322C18.7989 19.2634 18.163 19 17.5 19C16.837 19 16.2011 19.2634 15.7322 19.7322C15.2634 20.2011 15 20.837 15 21.5V22H13V21.5C13 20.9091 13.1164 20.3239 13.3425 19.7779C13.5687 19.232 13.9002 18.7359 14.318 18.318C14.7359 17.9002 15.232 17.5687 15.7779 17.3425C16.3239 17.1164 16.9091 17 17.5 17C18.0909 17 18.6761 17.1164 19.2221 17.3425C19.768 17.5687 20.2641 17.9002 20.682 18.318C21.0998 18.7359 21.4313 19.232 21.6575 19.7779C21.8836 20.3239 22 20.9091 22 21.5V22H20ZM10 22V18C10 17.2044 9.68393 16.4413 9.12132 15.8787C8.55871 15.3161 7.79565 15 7 15C6.20435 15 5.44129 15.3161 4.87868 15.8787C4.31607 16.4413 4 17.2044 4 18V22H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13C8.32608 13 9.59785 13.5268 10.5355 14.4645C11.4732 15.4021 12 16.6739 12 18V22H10Z" fill="#5C86C1" />
                                            </svg>
                                        }
                                    />
                                </div>
                                <div className="analysis-filter-item wage">
                                    <Input name="email" id="HourlyWage" type="text" lable="Hourly Wag" />
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
                                        {Map && <Map
                                            style={mapColor}
                                            containerStyle={{
                                                height: '100%',
                                                width: '100%'
                                            }}
                                            zoom={[0.1]}
                                        >
                                            <Marker coordinates={[-95.550000, 38.770000]} anchor="bottom"></Marker>
                                            {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                                                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                                            </Layer> */}
                                        </Map>}
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

const mapStateToProps = createStructuredSelector({
    theme: selectThemeSetting,
});

const mapDispatchToProps = (dispatch) => ({
    setThemeSetting: (theme) => dispatch(setThemeSetting(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalysisDashboard);
