import React, { useRef, useEffect, useState } from 'react';
import MapDistance from '../map-distance/MapDistance';
import MapControl from '../map-control/MapControl';
import Chart from "react-apexcharts";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeSetting } from "../../redux/theme/theme.selector";
import { setThemeSetting } from "../../redux/theme/theme.action";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Select from '../control-component/selectBox';
import './cowboys.style.scss'

const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-77.032, 38.913]
            },
            'properties': {
                'title': '1',
                'description': ''
            }
        },
        // {
        //     'type': 'Feature',
        //     'geometry': {
        //         'type': 'Point',
        //         'coordinates': [-122.414, 37.776]
        //     },
        //     'properties': {
        //         'title': '2',
        //         'description': ''
        //     }
        // }
    ]
};

const CowBoys = ({ theme, setThemeSetting }) => {


    const mapContainer = useRef(null);
    const map = useRef(null);
    let mapColor;
    const [lng, setLng] = useState(-77.550000);
    const [lat, setLat] = useState(38.770000);
    const [zoom, setZoom] = useState(4.5);
    const [occupation, setOccupation] = useState();

    // let mapColor;
    console.log('theme color', theme);

    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme.theme_color);

        if (theme.theme_color === 'esrp-theme') {
            mapColor = 'mapbox://styles/basalsmartsolutions/ckvtyjs1z2hcx14oyb5axlvlc'
            if (map.current) map.current.setStyle(mapColor);
        }
        if (theme.theme_color === 'light-theme') {

            mapColor = 'mapbox://styles/basalsmartsolutions/ckw232our0h7q14qs4h6yv2bx'
            if (map.current) map.current.setStyle(mapColor);
        }
        if (theme.theme_color === 'dark-theme') {
            mapColor = 'mapbox://styles/basalsmartsolutions/ckw219z4h1r7s14qtbw4fz3x8';
            if (map.current) map.current.setStyle(mapColor);

        }

        if (map.current) return;
        if (mapColor) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: mapColor,
                center: [lng, lat],
                zoom: zoom
            });

            for (const feature of geojson.features) {
                // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'marker';

                // make a marker for each feature and add it to the map
                new mapboxgl.Marker(el)
                    .setLngLat(feature.geometry.coordinates)
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25 }) // add popups
                            .setHTML(
                                `<span className="title">${feature.properties.title}</span><span className="sub-title">${feature.properties.description}</span>`
                            )
                    )
                    .addTo(map.current);
            }

        }

    }, [theme.theme_color]);

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

    // FOR REDIAL CHART
    const dataSet = {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 400, 430, 448, 470, 540, 580, 690, 1100,]
        }],
        options: {
            chart: {
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    borderRadius: 17,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            colors: [
                '#5C86C1',
                '#5C86C1',
                '#5C86C1',
                '#5C86C1',
                '#5C86C1',
                '#5C86C1',
                '#5C86C1',
                '#5C86C1',
                '#5C86C1',
                '#3FB7F3',
                '#3FB7F3',
                '#3FB7F3',
                '#3FB7F3',
                '#3FB7F3',
                '#81CAB2',
                '#81CAB2',
                '#81CAB2',
                '#81CAB2',
            ],
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff']
                },
                formatter: function (val, opt) {
                    var amount = parseInt(val);
                    if (amount > 1000) {
                        amount = amount / 1000;
                        amount = amount.toString();
                        amount = amount + 'k';
                    }
                    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + amount
                },
                offsetX: 0,
                dropShadow: {
                    enabled: true
                }
            },
            stroke: {
                width: 1,
                colors: ['transparent']
            },
            legend: {
                show: false,
            },
            xaxis: {
                categories: [
                    '333,060',
                    '338,353',
                    '349,297',
                    '326,476',
                    '315,397',
                    '376,591',
                    '365,531',
                    '357,836',
                    '335,924',
                    '337,267',
                    '306,401',
                    '291,329',
                    '238,376',
                    '182,777',
                    '137,078',
                    '88,387',
                    '54.2K',
                    '54K',
                ],
                labels: {
                    show: true
                }
            },
            yaxis: {
                labels: {
                    show: true
                }
            },
            title: {
                text: 'Custom DataLabels',
                align: 'center',
                floating: true
            },
            subtitle: {
                text: 'Category Names as DataLabels inside bars',
                align: 'center',
            },
            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function () {
                            return ''
                        }
                    }
                }
            }
        },
    };

    return (
        <>
            <section className="cowboys-sec">
                <div className="container-md">
                    <div className="row cowboys-title-filter-row">
                        <div className="col col-6">
                            <div className="breadcrumbs">
                                <ul>
                                    <li className="breadcrumb-item">
                                        <a href="#!">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">Dashboards</li>
                                </ul>
                            </div>
                            <h3 className="page-title">1 COWBOYS WAY, FRISCO TX</h3>
                            {/* <label htmlFor="" className="page-title-sub">Base Upon A 30 Minute Drive</label> */}
                        </div>
                        <div className="col col-6">
                            <div className="cowboys-filter-btn-select">
                                <div className="inner">
                                    <div>
                                        <button className="btn primary rounded">Details</button>
                                    </div>
                                    <div>
                                        <button className="btn rounded outline">Download</button>
                                    </div>
                                    <div>
                                        <Select
                                            selectItem={occupation}
                                            setSelectedItem={setOccupation}
                                            lableName="Select Occupation"
                                            options={["Lawyer", "Engineer", "Doctor", "Labor", "Gov."]}
                                        // selectIcon={
                                        //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        //         <path d="M7 10C7.66304 10 8.29893 9.73661 8.76777 9.26777C9.23661 8.79893 9.5 8.16304 9.5 7.5C9.5 6.83696 9.23661 6.20107 8.76777 5.73223C8.29893 5.26339 7.66304 5 7 5C6.33696 5 5.70107 5.26339 5.23223 5.73223C4.76339 6.20107 4.5 6.83696 4.5 7.5C4.5 8.16304 4.76339 8.79893 5.23223 9.26777C5.70107 9.73661 6.33696 10 7 10ZM7 12C6.40905 12 5.82389 11.8836 5.27792 11.6575C4.73196 11.4313 4.23588 11.0998 3.81802 10.682C3.40016 10.2641 3.06869 9.76804 2.84254 9.22208C2.6164 8.67611 2.5 8.09095 2.5 7.5C2.5 6.90905 2.6164 6.32389 2.84254 5.77792C3.06869 5.23196 3.40016 4.73588 3.81802 4.31802C4.23588 3.90016 4.73196 3.56869 5.27792 3.34254C5.82389 3.1164 6.40905 3 7 3C8.19347 3 9.33807 3.47411 10.182 4.31802C11.0259 5.16193 11.5 6.30653 11.5 7.5C11.5 8.69347 11.0259 9.83807 10.182 10.682C9.33807 11.5259 8.19347 12 7 12ZM17.5 14C18.0304 14 18.5391 13.7893 18.9142 13.4142C19.2893 13.0391 19.5 12.5304 19.5 12C19.5 11.4696 19.2893 10.9609 18.9142 10.5858C18.5391 10.2107 18.0304 10 17.5 10C16.9696 10 16.4609 10.2107 16.0858 10.5858C15.7107 10.9609 15.5 11.4696 15.5 12C15.5 12.5304 15.7107 13.0391 16.0858 13.4142C16.4609 13.7893 16.9696 14 17.5 14ZM17.5 16C16.4391 16 15.4217 15.5786 14.6716 14.8284C13.9214 14.0783 13.5 13.0609 13.5 12C13.5 10.9391 13.9214 9.92172 14.6716 9.17157C15.4217 8.42143 16.4391 8 17.5 8C18.5609 8 19.5783 8.42143 20.3284 9.17157C21.0786 9.92172 21.5 10.9391 21.5 12C21.5 13.0609 21.0786 14.0783 20.3284 14.8284C19.5783 15.5786 18.5609 16 17.5 16ZM20 22V21.5C20 20.837 19.7366 20.2011 19.2678 19.7322C18.7989 19.2634 18.163 19 17.5 19C16.837 19 16.2011 19.2634 15.7322 19.7322C15.2634 20.2011 15 20.837 15 21.5V22H13V21.5C13 20.9091 13.1164 20.3239 13.3425 19.7779C13.5687 19.232 13.9002 18.7359 14.318 18.318C14.7359 17.9002 15.232 17.5687 15.7779 17.3425C16.3239 17.1164 16.9091 17 17.5 17C18.0909 17 18.6761 17.1164 19.2221 17.3425C19.768 17.5687 20.2641 17.9002 20.682 18.318C21.0998 18.7359 21.4313 19.232 21.6575 19.7779C21.8836 20.3239 22 20.9091 22 21.5V22H20ZM10 22V18C10 17.2044 9.68393 16.4413 9.12132 15.8787C8.55871 15.3161 7.79565 15 7 15C6.20435 15 5.44129 15.3161 4.87868 15.8787C4.31607 16.4413 4 17.2044 4 18V22H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13C8.32608 13 9.59785 13.5268 10.5355 14.4645C11.4732 15.4021 12 16.6739 12 18V22H10Z" fill="#5C86C1" />
                                        //     </svg>
                                        // }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row map-informer-row">
                        <div className="col col-3">
                            <div className="card cowboys-informer-card">
                                <div className="card-body">
                                    <label className="title">The average salary for Lawyer is</label>
                                    <h3>$117,355</h3>
                                    <span>in Dallas-Fort Worth, TX</span>
                                </div>
                            </div>

                            <div className="card market-overview-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label htmlFor="">Market Overview</label>
                                    </div>
                                    <ul>
                                        <li>
                                            <span className="name">5 Year Population Growth Rate</span>
                                            <span className="value">9.0%</span>
                                        </li>
                                        {/* <li>
                                            <span className="name">5 Year Population Growth Rate</span>
                                            <span className="value">4.0%</span>
                                        </li> */}
                                        <li>
                                            <span className="name">Labor Force</span>
                                            <span className="value">2,900,260</span>
                                        </li>
                                        <li>
                                            <span className="name">Total Unemployed</span>
                                            <span className="value">96,324</span>
                                        </li>
                                        <li>
                                            <span className="name">Average Commute Time</span>
                                            <span className="value">30 min</span>
                                        </li>
                                        <li>
                                            <span className="name">Cost of Living Index</span>
                                            <span className="value">100.2</span>
                                        </li>
                                        <li>
                                            <span className="name">2022 Median Home Price</span>
                                            <span className="value">$265,795</span>
                                        </li>
                                        <li>
                                            <span className="name">1 Adult, 0 Children Monthly Housing Rate</span>
                                            <span className="value">$975</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-9">
                            <div className="card ripple-controls-map-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label>Situational Map</label>
                                        <div className="ripple-map-distance">
                                            <MapDistance />
                                        </div>
                                        <div className="more-btn">
                                            <a>
                                                <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0658571 2.35131C0.0658571 3.36445 0.799037 4.18577 1.70346 4.18577C2.60788 4.18577 3.34106 3.36445 3.34106 2.35131C3.34106 1.33816 2.60788 0.516846 1.70346 0.516846C0.799037 0.516846 0.0658571 1.33816 0.0658571 2.35131ZM0.0658568 9.68916C0.0658568 10.7023 0.799037 11.5236 1.70346 11.5236C2.60788 11.5236 3.34106 10.7023 3.34106 9.68917C3.34106 8.67602 2.60788 7.8547 1.70346 7.8547C0.799037 7.8547 0.0658569 8.67602 0.0658568 9.68916Z" fill="#7C7C84" />
                                                    <ellipse cx="1.70346" cy="17.3581" rx="1.83446" ry="1.6376" transform="rotate(90 1.70346 17.3581)" fill="#7C7C84" />
                                                    <ellipse cx="1.70346" cy="9.6892" rx="1.83446" ry="1.6376" transform="rotate(90 1.70346 9.6892)" fill="#7C7C84" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="ripple-map-controls-wrapper">
                                        <div className="ripple-map-controls">
                                            <MapControl />
                                            <div className="map-text">
                                                <label>Bluechip  MAP  DATA</label>
                                            </div>
                                        </div>
                                        <div className="card-content ripple-chart">
                                            {map && <div ref={mapContainer} className="map-container" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row market-growth-occupation-row">
                        <div className="col col-3">
                            <div className="card market-distribution-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label for="">Market Age Distribution</label>
                                        <span className="sub-text">Aging Labor Ratio: 1.71</span>
                                    </div>
                                    <div className="card-content">
                                        <Chart
                                            options={dataSet.options}
                                            series={dataSet.series}
                                            type="bar"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-9">
                            <div className="row">
                                <div className="col col-4">
                                    <div className="card occupational-overview-card">
                                        <div className="card-body">
                                            <div className="card-title">
                                                <label for="">Occupational Overview</label>
                                                {/* <span className="sub-text">Aging Labor Ratio: 1.71</span> */}
                                            </div>
                                            <div className="card-content">
                                                <div className="chart-price">
                                                    <h4>Lawyers<span className="up">▲10%</span></h4>
                                                </div>
                                                <div className="summary">
                                                    <label for="">Compared to $21,490 last year</label>
                                                </div>

                                                <div className="occupational-overview-progress">
                                                    <ul>
                                                        <li>
                                                            <label className="name">2020 Jobs</label>
                                                            <span className="value">20,840</span>
                                                        </li>
                                                        <li>
                                                            <label className="name">2021 Location Quotient</label>
                                                            <span className="value">0.97</span>
                                                        </li>
                                                    </ul>
                                                    <div className="progress-wrapper">
                                                        <div className="progress-bar">
                                                            <div className="progress" style={{ backgroundColor: '#81cab2', width: '20%' }} ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-4">
                                    <div className="card occupational-overview-card">
                                        <div className="card-body">
                                            <div className="card-title">
                                                <label for="">Market Education Attainment</label>
                                                {/* <span className="sub-text">Aging Labor Ratio: 1.71</span> */}
                                            </div>
                                            <div className="card-content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row living-wage-calc-row">

                        <div className="col col-12">
                            <div className="card analysis-column-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label htmlFor="">Living Wage Calculator</label>
                                        <div className="map-distance-wrapper">
                                            <span className="label">Wage:</span>
                                            <ul>
                                                <li className="active">
                                                    <a>Hourly</a>
                                                </li>
                                                <li>
                                                    <a>Monthly</a>
                                                </li>
                                                <li>
                                                    <a>Annually</a>
                                                </li>
                                            </ul>
                                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CowBoys);
