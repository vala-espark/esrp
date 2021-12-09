import React, { useRef, useEffect, useState } from 'react';
import MapDistance from '../map-distance/MapDistance';
import MapControl from '../map-control/MapControl';
import { connect } from 'react-redux';
import { selectThemeSetting } from "../../redux/theme/theme.selector";
import { setThemeSetting } from "../../redux/theme/theme.action";
import { createStructuredSelector } from 'reselect';
import './dashboard.style.scss';
import { Table } from 'react-bootstrap';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzYWxzbWFydHNvbHV0aW9ucyIsImEiOiJja3ZpZ2NtanNjazA3MnZuemt4ZnF6b2FoIn0.0oul5wnWu-7L_2HB0PTzCg';

const Dashboard = ({ theme, setThemeSetting }) => {
    let mapColor;
    const mapContainer = useRef(null);
    const map = useRef(null);
    // const 
    const [lng, setLng] = useState(-95.550000);
    const [lat, setLat] = useState(38.770000);
    const [zoom, setZoom] = useState(3.78);


    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme.theme_color);
        if (theme.theme_color === 'esrp-theme') {            
            mapColor = 'mapbox://styles/basalsmartsolutions/ckvtyjs1z2hcx14oyb5axlvlc'
            if (map.current) map.current.setStyle(mapColor);            
        }
        if (theme.theme_color === 'light-theme') {
            
            mapColor = 'mapbox://styles/basalsmartsolutions/ckw232our0h7q14qs4h6yv2bx'
            if (map.current)  map.current.setStyle(mapColor);                    
        }
        if (theme.theme_color === 'dark-theme') {            
            mapColor = 'mapbox://styles/basalsmartsolutions/ckw219z4h1r7s14qtbw4fz3x8';
            if (map.current) map.current.setStyle(mapColor);
                    
        }
       
        if (map.current) return;
        if(mapColor)
        {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: mapColor,
                center: [lng, lat],
                zoom: zoom
            });
            
        }

       
    }, [theme.theme_color]);
    

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

    }, [map]);



    return (
        <>

            <section className="dashboard-sec">

                <div className="dash-theme-change-wrapper d-none">
                    <input type="checkbox" onChange={e => {
                        if (e.target.checked) {
                            setThemeSetting({ theme_color: 'dark-theme' })

                        } else {
                            setThemeSetting({ theme_color: 'light-theme' })
                        }
                    }} checked={theme.theme_color === "dark-theme" ? true : false} />
                    {/* checked={`${theme.theme_color==='dark-theme'}`} */}
                    <label htmlFor="">
                        <span className="light">
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
                        </span>
                        <span className="dark">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9618 10.79C18.8045 12.4922 18.1657 14.1144 17.1201 15.4668C16.0744 16.8192 14.6653 17.8458 13.0575 18.4265C11.4497 19.0073 9.7098 19.1181 8.04132 18.7461C6.37283 18.3741 4.84481 17.5345 3.63604 16.3258C2.42727 15.117 1.58775 13.589 1.21572 11.9205C0.843691 10.252 0.954531 8.51208 1.53528 6.9043C2.11602 5.29651 3.14265 3.88737 4.49503 2.84175C5.84741 1.79614 7.46961 1.15731 9.17182 1C8.17523 2.34827 7.69566 4.00945 7.82035 5.68141C7.94503 7.35338 8.66568 8.92506 9.85122 10.1106C11.0368 11.2961 12.6084 12.0168 14.2804 12.1415C15.9524 12.2662 17.6135 11.7866 18.9618 10.79Z" stroke="#5C86C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </label>
                </div>


                {map && <div ref={mapContainer} className="map-container dashboard-map" />}


                <div className="dash-map-distance d-none">
                    <MapDistance />
                </div>

                <div className="dash-map-controls">
                    <MapControl />
                </div>

                <div className="dashboard-market-overview-clm">
                    {/* <div className="title">
                        <h4>Market Overview</h4>
                    </div> */}
                    <div className="population-wrap">
                        <p className="population-title">Population
                            <a href="#!">
                                Detail
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1718 11.9998L9.34277 9.17184L10.7568 7.75684L14.9998 11.9998L10.7568 16.2428L9.34277 14.8278L12.1718 11.9998Z" fill="#E6E8ED" />
                                </svg>
                            </a>
                        </p>
                        <h1>7,541,390</h1>
                        <h6>Market Race Distribution</h6>
                        <ul className="population-color-stripe-bar">
                            <li style={{ width: '36%', backgroundColor: '#1C5285' }}></li>
                            <li style={{ width: '19%', backgroundColor: '#3FB7F3' }}></li>
                            <li style={{ width: '20%', backgroundColor: '#83C9B2' }}></li>
                            <li style={{ width: '22%', backgroundColor: '#FBA651' }}></li>
                        </ul>
                    </div>
                    <div className="card population-card-info">
                        <div className="card-body">
                            <ul>
                                <li>
                                    {/* <span className="circle" style={{ backgroundColor: '#1C5285' }}></span> */}
                                    <span className="name" style={{ backgroundColor: '#1C5285' }}>White</span>
                                    <span className="percentage">55%</span>
                                </li>
                                <li>
                                    {/* <span className="circle" style={{ backgroundColor: '#3FB7F3' }}></span> */}
                                    <span className="name"style={{ backgroundColor: '#3FB7F3' }}>Asian</span>
                                    <span className="percentage">25%</span>
                                </li>
                                <li>
                                    {/* <span className="circle" style={{ backgroundColor: '#83C9B2' }}></span> */}
                                    <span className="name" style={{ backgroundColor: '#83C9B2' }}>Black</span>
                                    <span className="percentage">15%</span>
                                </li>
                                <li>
                                    {/* <span className="circle" style={{ backgroundColor: '#FBA651' }}></span> */}
                                    <span className="name" style={{ backgroundColor: '#FBA651' }}>Other</span>
                                    <span className="percentage">15%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card population-card-attainment">
                        <div className="card-body">
                            <div className="card-title">
                                <p>Market Education Attainment</p>
                            </div>
                            <div className="chart-market-value">
                                <h4>87%
                                    <span className="up">&#9650;02%</span>
                                    {/* <span className="down">&#9660;12%</span> */}
                                </h4>
                            </div>
                            <div className="chart-summary">
                                <label htmlFor="">Compared to 12% last year</label>
                            </div>
                            <div className="attainment-chart-wrap">
                                <img src="assets/images/graph.png" alt="" />
                            </div>
                            <div className="attainment-data-table">
                                <ul>
                                    <li className="up">
                                        <span className="name">High School</span>
                                        <span className="value">760</span>
                                        <span className="total">2,540</span>
                                        <span className="arrow">&#9650;</span>
                                    </li>
                                    <li className="down">
                                        <span className="name">Associates</span>
                                        <span className="value">650</span>
                                        <span className="total">2,304</span>
                                        <span className="arrow">&#9660;</span>
                                    </li>
                                    <li className="down">
                                        <span className="name">Bachelors</span>
                                        <span className="value">612</span>
                                        <span className="total">2,140</span>
                                        <span className="arrow">&#9650;</span>
                                    </li>
                                </ul>
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


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);