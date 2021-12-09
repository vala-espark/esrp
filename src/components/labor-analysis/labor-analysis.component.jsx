import React, { useRef, useEffect, useState } from 'react';
import MapDistance from '../map-distance/MapDistance';
import MapControl from '../map-control/MapControl';
import { connect } from 'react-redux';
import { selectThemeSetting } from "../../redux/theme/theme.selector";
import { setThemeSetting } from "../../redux/theme/theme.action";
import { createStructuredSelector } from 'reselect';
import Select from '../control-component/selectBox';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Input from '../control-component/input';
import './labor-analysis.style.scss';

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
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-122.414, 37.776]
            },
            'properties': {
                'title': '2',
                'description': ''
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-100.414, 30.776]
            },
            'properties': {
                'title': '3',
                'description': ''
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-100.414, 40.776]
            },
            'properties': {
                'title': '4',
                'description': ''
            }
        }
    ]
};

const LaborAnalysis = ({ theme, setThemeSetting }) => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    let mapColor;
    const [lng, setLng] = useState(-95.550000);
    const [lat, setLat] = useState(38.770000);
    const [zoom, setZoom] = useState(3);

    const [showFilter, setShowFilter] = useState(false);

    const [occupation, setOccupation] = useState();
    const [radius, setRadius] = useState();

    const toggleTheme = () => {
        if (theme.theme_color === "dark-theme") {
            setThemeSetting({ theme_color: 'esrp-theme' })
        } else {
            setThemeSetting({ theme_color: 'dark-theme' })
        }
    }

    useEffect(() => {
        document.body.classList.remove('esrp-theme', 'dark-theme');
        document.body.classList.add(theme.theme_color);
    }, [theme.theme_color]);


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
                        new mapboxgl.Popup({ offset: 15, closeOnClick: false }) // add popups
                            .setHTML(
                                `<span class="title">${feature.properties.title}</span><span class="sub-title">${feature.properties.description}</span>`
                            )
                    )
                    .addTo(map.current);
            }

        }

    }, [theme.theme_color]);




    return (
        <>
            <section className="labor-analysis-sec">
                <div className="container-md">
                    <div className="row title-filter-row">
                        <div className="col col-4">
                            <h3 className="page-title">Labor Analysis</h3>
                            <label htmlFor="" className="page-title-sub">Based Upon A 30 Minute Drive</label>
                        </div>
                        <div className="col col-8">
                            <div className="labor-filter-btns-wrap">
                                <ul>
                                    {/* <li>
                                        <div className="theme-changer-btn">
                                            <button className="btn-icon" onClick={toggleTheme}>
                                                {
                                                    theme.theme_color === 'dark-theme' ? (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.9618 10.79C18.8045 12.4922 18.1657 14.1144 17.1201 15.4668C16.0744 16.8192 14.6653 17.8458 13.0575 18.4265C11.4497 19.0073 9.7098 19.1181 8.04132 18.7461C6.37283 18.3741 4.84481 17.5345 3.63604 16.3258C2.42727 15.117 1.58775 13.589 1.21572 11.9205C0.843691 10.252 0.954531 8.51208 1.53528 6.9043C2.11602 5.29651 3.14265 3.88737 4.49503 2.84175C5.84741 1.79614 7.46961 1.15731 9.17182 1C8.17523 2.34827 7.69566 4.00945 7.82035 5.68141C7.94503 7.35338 8.66568 8.92506 9.85122 10.1106C11.0368 11.2961 12.6084 12.0168 14.2804 12.1415C15.9524 12.2662 17.6135 11.7866 18.9618 10.79Z" stroke="#5C86C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>) : (
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12 1V3" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M12 21V23" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.21875 4.2207L5.63875 5.6407" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.3594 18.3594L19.7794 19.7794" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M1 12H3" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M21 12H23" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M4.21875 19.7794L5.63875 18.3594" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M18.3594 5.6407L19.7794 4.2207" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    )
                                                }
                                            </button>
                                        </div>
                                    </li> */}
                                    <li>
                                        <div className="action-btn download-btn">
                                            <button className="btn primary outline rounded">Hello</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="action-btn download-btn">
                                            <button className="btn primary rounded" onClick={() => setShowFilter(true)}>Show Filters</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row labor-chart-row">
                        <div className="col col-4">
                            <div className="card labor-market-score-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label>Location Labor Score</label>
                                    </div>
                                    <div className="card-content">
                                        <ul className="indicator-text">
                                            <li><span className="circle" style={{ backgroundColor: '#5C86C1', }}></span><label className="name">Labor Competition</label></li>
                                            <li><span className="circle" style={{ backgroundColor: '#3FB7F3', }}></span><label className="name">Labor Sustainability</label></li>
                                            <li><span className="circle" style={{ backgroundColor: '#81CAB2', }}></span><label className="name">Labor Cost</label></li>
                                            <li><span className="circle" style={{ backgroundColor: '#fda747', }}></span><label className="name">Labor Supply</label></li>
                                        </ul>
                                        <div className="labor-market-score-progress-wrap">
                                            <ul>
                                                <li>
                                                    <label className="name">1. 1500 Waltham Way</label>
                                                    <span className="value">92</span>
                                                    <div className="progress-wrap">
                                                        <div className="progress-item">
                                                            <span style={{ backgroundColor: '#5C86C1', width: 'calc(25% + 18px)' }}>25.00</span>
                                                            <span style={{ backgroundColor: '#3FB7F3', width: 'calc(25% + 18px)' }}>17.83</span>
                                                            <span style={{ backgroundColor: '#81CAB2', width: 'calc(25% + 18px)' }}>24.0</span>
                                                            <span style={{ backgroundColor: '#fda747', width: 'calc(25% + 18px)' }}>24.72</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <label className="name">2. Majestic Reno Commercenter III</label>
                                                    <span className="value">88</span>
                                                    <div className="progress-wrap">
                                                        <div className="progress-item">
                                                            <span style={{ backgroundColor: '#5C86C1', width: 'calc(25% + 18px)' }}>25.00</span>
                                                            <span style={{ backgroundColor: '#3FB7F3', width: 'calc(25% + 18px)' }}>17.83</span>
                                                            <span style={{ backgroundColor: '#81CAB2', width: 'calc(25% + 18px)' }}>24.0</span>
                                                            <span style={{ backgroundColor: '#fda747', width: 'calc(25% + 18px)' }}>24.72</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <label className="name">3. Reno-Stead Airport Phase 1</label>
                                                    <span className="value">88</span>
                                                    <div className="progress-wrap">
                                                        <div className="progress-item">
                                                            <span style={{ backgroundColor: '#5C86C1', width: 'calc(25% + 18px)' }}>25.00</span>
                                                            <span style={{ backgroundColor: '#3FB7F3', width: 'calc(25% + 18px)' }}>17.83</span>
                                                            <span style={{ backgroundColor: '#81CAB2', width: 'calc(25% + 18px)' }}>24.0</span>
                                                            <span style={{ backgroundColor: '#fda747', width: 'calc(25% + 18px)' }}>24.72</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <label className="name">4. 727 Milan Dr</label>
                                                    <span className="value">87</span>
                                                    <div className="progress-wrap">
                                                        <div className="progress-item">
                                                            <span style={{ backgroundColor: '#5C86C1', width: 'calc(25% + 18px)' }}>25.00</span>
                                                            <span style={{ backgroundColor: '#3FB7F3', width: 'calc(25% + 18px)' }}>17.83</span>
                                                            <span style={{ backgroundColor: '#81CAB2', width: 'calc(25% + 18px)' }}>24.0</span>
                                                            <span style={{ backgroundColor: '#fda747', width: 'calc(25% + 18px)' }}>24.72</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <label className="name">5. Tric 181 BTS Options</label>
                                                    <span className="value">80</span>
                                                    <div className="progress-wrap">
                                                        <div className="progress-item">
                                                            <span style={{ backgroundColor: '#5C86C1', width: 'calc(25% + 18px)' }}>25.00</span>
                                                            <span style={{ backgroundColor: '#3FB7F3', width: 'calc(25% + 18px)' }}>17.83</span>
                                                            <span style={{ backgroundColor: '#81CAB2', width: 'calc(25% + 18px)' }}>24.0</span>
                                                            <span style={{ backgroundColor: '#fda747', width: 'calc(25% + 18px)' }}>24.72</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-8">
                            <div className="card labor-situational-map-card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <label>Reno Market</label>
                                        <div className="labor-map-distance">
                                            <div className="map-distance-wrapper">
                                                {/* <span className="label">Drive Time:</span> */}
                                                <ul>
                                                    <li>
                                                        <a>15Min</a>
                                                    </li>
                                                    <li>
                                                        <a>30Min</a>
                                                    </li>
                                                    <li className="active">
                                                        <a>45Min</a>
                                                    </li>
                                                    <li>
                                                        <a>60Min</a>
                                                    </li>
                                                </ul>
                                            </div>
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

                                    <div className="map-control-wrapper">
                                        <div className="labor-map-controls">
                                            <MapControl />
                                        </div>
                                        <div className="multi-circle-chart-map-wrap">
                                            {map && <div ref={mapContainer} className="map-container dashboard-map" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className={`${showFilter ? 'show' : ''} overlay`}  onClick={() => setShowFilter(false)}></div>

            <div className={`${showFilter ? 'show' : ''} labor-filter-sidebar`}>
                <div className="sidebar-inner">
                    <div className="sidebar-item-btn-close">
                    <span onClick={() => setShowFilter(false)}>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1.00195L1 13.002" stroke="#111128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 1.00195L13 13.002" stroke="#111128" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                        {/* <button className="btn primary hide-trigger" onClick={() => setShowFilter(false)}>Hide Filters</button> */}
                    </div>
                    <div className="sidebar-item-wrapper">
                        <div className="sidebar-item">
                            <div className="sidebar-title">
                                <h4>Filters</h4>
                            </div>
                            <div className="input-item">
                                <Select
                                    selectItem={occupation}
                                    setSelectedItem={setOccupation}
                                    lableName="Select Occupation"
                                    options={["(All)", "One", "Two", "Three"]}
                                // selectIcon={
                                //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                //         <path d="M7 10C7.66304 10 8.29893 9.73661 8.76777 9.26777C9.23661 8.79893 9.5 8.16304 9.5 7.5C9.5 6.83696 9.23661 6.20107 8.76777 5.73223C8.29893 5.26339 7.66304 5 7 5C6.33696 5 5.70107 5.26339 5.23223 5.73223C4.76339 6.20107 4.5 6.83696 4.5 7.5C4.5 8.16304 4.76339 8.79893 5.23223 9.26777C5.70107 9.73661 6.33696 10 7 10ZM7 12C6.40905 12 5.82389 11.8836 5.27792 11.6575C4.73196 11.4313 4.23588 11.0998 3.81802 10.682C3.40016 10.2641 3.06869 9.76804 2.84254 9.22208C2.6164 8.67611 2.5 8.09095 2.5 7.5C2.5 6.90905 2.6164 6.32389 2.84254 5.77792C3.06869 5.23196 3.40016 4.73588 3.81802 4.31802C4.23588 3.90016 4.73196 3.56869 5.27792 3.34254C5.82389 3.1164 6.40905 3 7 3C8.19347 3 9.33807 3.47411 10.182 4.31802C11.0259 5.16193 11.5 6.30653 11.5 7.5C11.5 8.69347 11.0259 9.83807 10.182 10.682C9.33807 11.5259 8.19347 12 7 12ZM17.5 14C18.0304 14 18.5391 13.7893 18.9142 13.4142C19.2893 13.0391 19.5 12.5304 19.5 12C19.5 11.4696 19.2893 10.9609 18.9142 10.5858C18.5391 10.2107 18.0304 10 17.5 10C16.9696 10 16.4609 10.2107 16.0858 10.5858C15.7107 10.9609 15.5 11.4696 15.5 12C15.5 12.5304 15.7107 13.0391 16.0858 13.4142C16.4609 13.7893 16.9696 14 17.5 14ZM17.5 16C16.4391 16 15.4217 15.5786 14.6716 14.8284C13.9214 14.0783 13.5 13.0609 13.5 12C13.5 10.9391 13.9214 9.92172 14.6716 9.17157C15.4217 8.42143 16.4391 8 17.5 8C18.5609 8 19.5783 8.42143 20.3284 9.17157C21.0786 9.92172 21.5 10.9391 21.5 12C21.5 13.0609 21.0786 14.0783 20.3284 14.8284C19.5783 15.5786 18.5609 16 17.5 16ZM20 22V21.5C20 20.837 19.7366 20.2011 19.2678 19.7322C18.7989 19.2634 18.163 19 17.5 19C16.837 19 16.2011 19.2634 15.7322 19.7322C15.2634 20.2011 15 20.837 15 21.5V22H13V21.5C13 20.9091 13.1164 20.3239 13.3425 19.7779C13.5687 19.232 13.9002 18.7359 14.318 18.318C14.7359 17.9002 15.232 17.5687 15.7779 17.3425C16.3239 17.1164 16.9091 17 17.5 17C18.0909 17 18.6761 17.1164 19.2221 17.3425C19.768 17.5687 20.2641 17.9002 20.682 18.318C21.0998 18.7359 21.4313 19.232 21.6575 19.7779C21.8836 20.3239 22 20.9091 22 21.5V22H20ZM10 22V18C10 17.2044 9.68393 16.4413 9.12132 15.8787C8.55871 15.3161 7.79565 15 7 15C6.20435 15 5.44129 15.3161 4.87868 15.8787C4.31607 16.4413 4 17.2044 4 18V22H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13C8.32608 13 9.59785 13.5268 10.5355 14.4645C11.4732 15.4021 12 16.6739 12 18V22H10Z" fill="#5C86C1" />
                                //     </svg>
                                // }
                                />
                            </div>
                            <div className="input-item">
                                <Select
                                    selectItem={radius}
                                    setSelectedItem={setRadius}
                                    lableName="Select Occupation"
                                    options={["10 miles", "20 miles", "30 miles", "40 miles", "50 miles"]}
                                // selectIcon={
                                //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                //         <path d="M7 10C7.66304 10 8.29893 9.73661 8.76777 9.26777C9.23661 8.79893 9.5 8.16304 9.5 7.5C9.5 6.83696 9.23661 6.20107 8.76777 5.73223C8.29893 5.26339 7.66304 5 7 5C6.33696 5 5.70107 5.26339 5.23223 5.73223C4.76339 6.20107 4.5 6.83696 4.5 7.5C4.5 8.16304 4.76339 8.79893 5.23223 9.26777C5.70107 9.73661 6.33696 10 7 10ZM7 12C6.40905 12 5.82389 11.8836 5.27792 11.6575C4.73196 11.4313 4.23588 11.0998 3.81802 10.682C3.40016 10.2641 3.06869 9.76804 2.84254 9.22208C2.6164 8.67611 2.5 8.09095 2.5 7.5C2.5 6.90905 2.6164 6.32389 2.84254 5.77792C3.06869 5.23196 3.40016 4.73588 3.81802 4.31802C4.23588 3.90016 4.73196 3.56869 5.27792 3.34254C5.82389 3.1164 6.40905 3 7 3C8.19347 3 9.33807 3.47411 10.182 4.31802C11.0259 5.16193 11.5 6.30653 11.5 7.5C11.5 8.69347 11.0259 9.83807 10.182 10.682C9.33807 11.5259 8.19347 12 7 12ZM17.5 14C18.0304 14 18.5391 13.7893 18.9142 13.4142C19.2893 13.0391 19.5 12.5304 19.5 12C19.5 11.4696 19.2893 10.9609 18.9142 10.5858C18.5391 10.2107 18.0304 10 17.5 10C16.9696 10 16.4609 10.2107 16.0858 10.5858C15.7107 10.9609 15.5 11.4696 15.5 12C15.5 12.5304 15.7107 13.0391 16.0858 13.4142C16.4609 13.7893 16.9696 14 17.5 14ZM17.5 16C16.4391 16 15.4217 15.5786 14.6716 14.8284C13.9214 14.0783 13.5 13.0609 13.5 12C13.5 10.9391 13.9214 9.92172 14.6716 9.17157C15.4217 8.42143 16.4391 8 17.5 8C18.5609 8 19.5783 8.42143 20.3284 9.17157C21.0786 9.92172 21.5 10.9391 21.5 12C21.5 13.0609 21.0786 14.0783 20.3284 14.8284C19.5783 15.5786 18.5609 16 17.5 16ZM20 22V21.5C20 20.837 19.7366 20.2011 19.2678 19.7322C18.7989 19.2634 18.163 19 17.5 19C16.837 19 16.2011 19.2634 15.7322 19.7322C15.2634 20.2011 15 20.837 15 21.5V22H13V21.5C13 20.9091 13.1164 20.3239 13.3425 19.7779C13.5687 19.232 13.9002 18.7359 14.318 18.318C14.7359 17.9002 15.232 17.5687 15.7779 17.3425C16.3239 17.1164 16.9091 17 17.5 17C18.0909 17 18.6761 17.1164 19.2221 17.3425C19.768 17.5687 20.2641 17.9002 20.682 18.318C21.0998 18.7359 21.4313 19.232 21.6575 19.7779C21.8836 20.3239 22 20.9091 22 21.5V22H20ZM10 22V18C10 17.2044 9.68393 16.4413 9.12132 15.8787C8.55871 15.3161 7.79565 15 7 15C6.20435 15 5.44129 15.3161 4.87868 15.8787C4.31607 16.4413 4 17.2044 4 18V22H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13C8.32608 13 9.59785 13.5268 10.5355 14.4645C11.4732 15.4021 12 16.6739 12 18V22H10Z" fill="#5C86C1" />
                                //     </svg>
                                // }
                                />
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-title">
                                <h4>Weight</h4>
                                <span className="body-2">Total weight must equal 100%</span>
                            </div>
                            <div className="input-item">
                                <Input name="LaborSupply" id="LaborSupply" type="text" lable="Labor Supply" />
                            </div>
                            <div className="input-item">
                                <Input name="LaborCost" id="LaborCost" type="text" lable="Labor Cost" />
                            </div>
                            <div className="input-item">
                                <Input name="LaborSustainability" id="LaborSustainability" type="text" lable="Labor Sustainability" />
                            </div>
                            <div className="input-item">
                                <Input name="LaborCompetition" id="LaborCompetition" type="text" lable="Labor Competition" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    theme: selectThemeSetting,
});

const mapDispatchToProps = (dispatch) => ({
    setThemeSetting: (theme) => dispatch(setThemeSetting(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LaborAnalysis);
