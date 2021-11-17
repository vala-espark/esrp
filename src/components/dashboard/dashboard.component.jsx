import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { selectThemeSetting } from "../../redux/theme/theme.selector";
import { createStructuredSelector } from 'reselect';
import './dashboard.style.scss';
import { Table } from 'react-bootstrap';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzYWxzbWFydHNvbHV0aW9ucyIsImEiOiJja3ZpZ2NtanNjazA3MnZuemt4ZnF6b2FoIn0.0oul5wnWu-7L_2HB0PTzCg';

const Dashboard = ({theme}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-95.550000);
    const [lat, setLat] = useState(38.770000);
    const [zoom, setZoom] = useState(3.78);
    const [mapColor,setMapColor] = useState('');
    
    useEffect(() => {
        if(theme.theme_color === 'esrp-theme')
        {
            setMapColor('mapbox://styles/basalsmartsolutions/ckvtyjs1z2hcx14oyb5axlvlc');
        }
        if(theme.theme_color === 'light-theme')
        {
            setMapColor('mapbox://styles/basalsmartsolutions/ckvill2q0ase614pc0iiwkd2y');
        }
        if(theme.theme_color === 'dark-theme')
        {
            setMapColor('mapbox://styles/basalsmartsolutions/ckw36chtz0sel14mwd6cawuut');
        }
    },[theme.theme_color]);

    useEffect(() => {
        // if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapColor,
            center: [lng, lat],
            zoom: zoom
        });
    },[mapColor]);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    },[]);

    return (
        <>
            <section className="dashboard-sec">
                <div ref={mapContainer} className="map-container" />

                <div className="dash-map-distance">
                    <div className="map-distance-wrapper">
                        <ul>
                            <li>
                                <a>1M</a>
                            </li>
                            <li>
                                <a>5m</a>
                            </li>
                            <li className="active">
                                <a>15m</a>
                            </li>
                            <li>
                                <a>30m</a>
                            </li>
                            <li>
                                <a>All</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="dash-map-controls">
                    <div className="map-control-wrapper">
                        <div className="map-control-item">
                            <ul>
                                <li>
                                    <a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#5A5A89" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 11H13H19V13H13H11H5V11H11Z" fill="#5A5A89" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="map-control-item">
                            <ul>
                                <li>
                                    <a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14Z" fill="#5A5A89" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="map-control-item">
                            <ul>
                                <li>
                                    <a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.10495 15.2102C7.7586 15.4693 8.30051 15.9497 8.63613 16.5676C8.97175 17.1855 9.07975 17.9016 8.9413 18.5909C8.80285 19.2803 8.42673 19.8992 7.87858 20.3396C7.33043 20.7799 6.64505 21.0138 5.94204 21.0005C5.23903 20.9871 4.56303 20.7273 4.032 20.2665C3.50098 19.8056 3.14864 19.1729 3.03648 18.4787C2.92432 17.7846 3.05945 17.0731 3.4183 16.4685C3.77715 15.8638 4.33692 15.4043 4.99995 15.1702V8.83023C4.33245 8.59432 3.76985 8.13003 3.41159 7.51942C3.05332 6.90881 2.92246 6.1912 3.04213 5.49344C3.16181 4.79567 3.52431 4.16268 4.06557 3.70635C4.60683 3.25002 5.29199 2.99974 5.99995 2.99974C6.7079 2.99974 7.39306 3.25002 7.93432 3.70635C8.47558 4.16268 8.83808 4.79567 8.95776 5.49344C9.07743 6.1912 8.94657 6.90881 8.58831 7.51942C8.23004 8.13003 7.66744 8.59432 6.99995 8.83023V12.0002C7.83595 11.3722 8.87395 11.0002 9.99995 11.0002H13.9999C14.6581 11.0003 15.2979 10.7839 15.821 10.3846C16.3441 9.98528 16.7215 9.42506 16.8949 8.79023C16.2381 8.53013 15.6941 8.04666 15.3587 7.42492C15.0233 6.80318 14.9179 6.08304 15.0612 5.39128C15.2045 4.69952 15.5873 4.08049 16.1421 3.64317C16.6969 3.20585 17.3882 2.97827 18.0943 3.00051C18.8004 3.02275 19.476 3.29338 20.0022 3.76475C20.5284 4.23611 20.8714 4.87801 20.9709 5.57741C21.0704 6.27682 20.92 6.9889 20.5461 7.5883C20.1722 8.1877 19.5988 8.63598 18.9269 8.85423C18.7255 10.0149 18.1209 11.0672 17.2195 11.8257C16.3182 12.5842 15.178 13.0001 13.9999 13.0002H9.99995C9.34184 13.0002 8.70196 13.2165 8.17885 13.6158C7.65575 14.0152 7.27841 14.5754 7.10495 15.2102ZM5.99995 17.0002C5.73473 17.0002 5.48038 17.1056 5.29284 17.2931C5.1053 17.4807 4.99995 17.735 4.99995 18.0002C4.99995 18.2654 5.1053 18.5198 5.29284 18.7073C5.48038 18.8949 5.73473 19.0002 5.99995 19.0002C6.26516 19.0002 6.51952 18.8949 6.70705 18.7073C6.89459 18.5198 6.99995 18.2654 6.99995 18.0002C6.99995 17.735 6.89459 17.4807 6.70705 17.2931C6.51952 17.1056 6.26516 17.0002 5.99995 17.0002ZM5.99995 5.00023C5.73473 5.00023 5.48038 5.10558 5.29284 5.29312C5.1053 5.48066 4.99995 5.73501 4.99995 6.00023C4.99995 6.26544 5.1053 6.5198 5.29284 6.70733C5.48038 6.89487 5.73473 7.00023 5.99995 7.00023C6.26516 7.00023 6.51952 6.89487 6.70705 6.70733C6.89459 6.5198 6.99995 6.26544 6.99995 6.00023C6.99995 5.73501 6.89459 5.48066 6.70705 5.29312C6.51952 5.10558 6.26516 5.00023 5.99995 5.00023ZM17.9999 5.00023C17.7347 5.00023 17.4804 5.10558 17.2928 5.29312C17.1053 5.48066 16.9999 5.73501 16.9999 6.00023C16.9999 6.26544 17.1053 6.5198 17.2928 6.70733C17.4804 6.89487 17.7347 7.00023 17.9999 7.00023C18.2652 7.00023 18.5195 6.89487 18.7071 6.70733C18.8946 6.5198 18.9999 6.26544 18.9999 6.00023C18.9999 5.73501 18.8946 5.48066 18.7071 5.29312C18.5195 5.10558 18.2652 5.00023 17.9999 5.00023Z" fill="#5A5A89" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.874 12.9999C15.6516 13.8581 15.1504 14.6182 14.4493 15.1608C13.7481 15.7034 12.8866 15.9978 12 15.9978C11.1134 15.9978 10.2519 15.7034 9.55074 15.1608C8.84957 14.6182 8.34844 13.8581 8.126 12.9999H3V10.9999H8.126C8.34844 10.1417 8.84957 9.38158 9.55074 8.83897C10.2519 8.29636 11.1134 8.00195 12 8.00195C12.8866 8.00195 13.7481 8.29636 14.4493 8.83897C15.1504 9.38158 15.6516 10.1417 15.874 10.9999H21V12.9999H15.874ZM12 13.9999C12.5304 13.9999 13.0391 13.7892 13.4142 13.4141C13.7893 13.039 14 12.5303 14 11.9999C14 11.4695 13.7893 10.9608 13.4142 10.5857C13.0391 10.2106 12.5304 9.9999 12 9.9999C11.4696 9.9999 10.9609 10.2106 10.5858 10.5857C10.2107 10.9608 10 11.4695 10 11.9999C10 12.5303 10.2107 13.039 10.5858 13.4141C10.9609 13.7892 11.4696 13.9999 12 13.9999Z" fill="#5A5A89" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 5H17C17.5305 5 18.0392 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V15.17C19.6675 15.4059 20.2301 15.8702 20.5884 16.4808C20.9467 17.0914 21.0775 17.809 20.9578 18.5068C20.8382 19.2046 20.4757 19.8375 19.9344 20.2939C19.3931 20.7502 18.708 21.0005 18 21.0005C17.2921 21.0005 16.6069 20.7502 16.0657 20.2939C15.5244 19.8375 15.1619 19.2046 15.0422 18.5068C14.9225 17.809 15.0534 17.0914 15.4117 16.4808C15.7699 15.8702 16.3325 15.4059 17 15.17V7H15V10L10.5 6L15 2V5ZM5.00003 8.83C4.33254 8.59409 3.76994 8.1298 3.41167 7.51919C3.0534 6.90859 2.92254 6.19098 3.04222 5.49321C3.16189 4.79545 3.5244 4.16246 4.06566 3.70613C4.60692 3.2498 5.29208 2.99951 6.00003 2.99951C6.70798 2.99951 7.39314 3.2498 7.9344 3.70613C8.47566 4.16246 8.83817 4.79545 8.95784 5.49321C9.07752 6.19098 8.94666 6.90859 8.58839 7.51919C8.23012 8.1298 7.66752 8.59409 7.00003 8.83V15.17C7.66752 15.4059 8.23012 15.8702 8.58839 16.4808C8.94666 17.0914 9.07752 17.809 8.95784 18.5068C8.83817 19.2046 8.47566 19.8375 7.9344 20.2939C7.39314 20.7502 6.70798 21.0005 6.00003 21.0005C5.29208 21.0005 4.60692 20.7502 4.06566 20.2939C3.5244 19.8375 3.16189 19.2046 3.04222 18.5068C2.92254 17.809 3.0534 17.0914 3.41167 16.4808C3.76994 15.8702 4.33254 15.4059 5.00003 15.17V8.83ZM6.00003 7C6.26525 7 6.5196 6.89464 6.70714 6.70711C6.89467 6.51957 7.00003 6.26522 7.00003 6C7.00003 5.73478 6.89467 5.48043 6.70714 5.29289C6.5196 5.10536 6.26525 5 6.00003 5C5.73481 5 5.48046 5.10536 5.29292 5.29289C5.10539 5.48043 5.00003 5.73478 5.00003 6C5.00003 6.26522 5.10539 6.51957 5.29292 6.70711C5.48046 6.89464 5.73481 7 6.00003 7ZM6.00003 19C6.26525 19 6.5196 18.8946 6.70714 18.7071C6.89467 18.5196 7.00003 18.2652 7.00003 18C7.00003 17.7348 6.89467 17.4804 6.70714 17.2929C6.5196 17.1054 6.26525 17 6.00003 17C5.73481 17 5.48046 17.1054 5.29292 17.2929C5.10539 17.4804 5.00003 17.7348 5.00003 18C5.00003 18.2652 5.10539 18.5196 5.29292 18.7071C5.48046 18.8946 5.73481 19 6.00003 19ZM18 19C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8947 18.5196 19 18.2652 19 18C19 17.7348 18.8947 17.4804 18.7071 17.2929C18.5196 17.1054 18.2652 17 18 17C17.7348 17 17.4805 17.1054 17.2929 17.2929C17.1054 17.4804 17 17.7348 17 18C17 18.2652 17.1054 18.5196 17.2929 18.7071C17.4805 18.8946 17.7348 19 18 19Z" fill="#5A5A89" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="dashboard-market-overview-clm">
                    <div className="title">
                        <h4>Market Overview</h4>
                    </div>
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
                            <li style={{ width: '36%', backgroundColor: '#31C192' }}></li>
                            <li style={{ width: '19%', backgroundColor: '#F5B954' }}></li>
                            <li style={{ width: '20%', backgroundColor: '#5C86C1' }}></li>
                            <li style={{ width: '22%', backgroundColor: '#D9585F' }}></li>
                        </ul>
                    </div>
                    <div className="card population-card-info">
                        <div className="card-body">
                            <ul>
                                <li>
                                    <span className="circle" style={{ backgroundColor: '#31C192' }}></span>
                                    <span className="name">White</span>
                                    <span className="percentage">55%</span>
                                </li>
                                <li>
                                    <span className="circle" style={{ backgroundColor: '#5C86C1' }}></span>
                                    <span className="name">Asian</span>
                                    <span className="percentage">25%</span>
                                </li>
                                <li>
                                    <span className="circle" style={{ backgroundColor: '#D9585F' }}></span>
                                    <span className="name">Black</span>
                                    <span className="percentage">15%</span>
                                </li>
                                <li>
                                    <span className="circle" style={{ backgroundColor: '#F5B954' }}></span>
                                    <span className="name">Other</span>
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
  

export default connect(mapStateToProps)(Dashboard);