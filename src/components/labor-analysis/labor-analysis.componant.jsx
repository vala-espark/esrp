import React, { useEffect, useState } from 'react';
import MapDistance from '../map-distance/MapDistance';
import MapControl from '../map-control/MapControl';
import { connect } from 'react-redux';
import { selectThemeSetting } from "../../redux/theme/theme.selector";
import { setThemeSetting } from "../../redux/theme/theme.action";
import { createStructuredSelector } from 'reselect';

import './labor-analysis.style.scss';

const LaborAnalysis = ({ theme, setThemeSetting }) => {

    const [showFilter,setShowFilter] = useState(false);

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
            <section className="labor-analysis-sec">
                <div className="container-md">
                    <div className="row title-filter-row">
                        <div className="col col-4">
                            <h3 className="page-title">Labor Analysis</h3>
                            <label htmlFor="" className="page-title-sub">Base Upon A 30 Minute Drive</label>
                        </div>
                        <div className="col col-8">
                            <div className="labor-filter-btns-wrap">
                                <ul>
                                    <li>
                                        <div className="theme-changer-btn">
                                            <button className="btn-icon" onClick={toggleTheme}>
                                                {
                                                    theme.theme_color === 'dark-theme' ? (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.9618 10.79C18.8045 12.4922 18.1657 14.1144 17.1201 15.4668C16.0744 16.8192 14.6653 17.8458 13.0575 18.4265C11.4497 19.0073 9.7098 19.1181 8.04132 18.7461C6.37283 18.3741 4.84481 17.5345 3.63604 16.3258C2.42727 15.117 1.58775 13.589 1.21572 11.9205C0.843691 10.252 0.954531 8.51208 1.53528 6.9043C2.11602 5.29651 3.14265 3.88737 4.49503 2.84175C5.84741 1.79614 7.46961 1.15731 9.17182 1C8.17523 2.34827 7.69566 4.00945 7.82035 5.68141C7.94503 7.35338 8.66568 8.92506 9.85122 10.1106C11.0368 11.2961 12.6084 12.0168 14.2804 12.1415C15.9524 12.2662 17.6135 11.7866 18.9618 10.79Z" stroke="#5C86C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>) : (
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M12 1V3" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M12 21V23" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M4.21875 4.2207L5.63875 5.6407" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M18.3594 18.3594L19.7794 19.7794" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M1 12H3" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M21 12H23" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M4.21875 19.7794L5.63875 18.3594" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M18.3594 5.6407L19.7794 4.2207" stroke="#175086" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    )
                                                }
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="action-btn download-btn">
                                            <button className="btn primary outline">Hello</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="action-btn download-btn">
                                            <button className="btn primary" onClick={()=>setShowFilter(true)}>Show Filters</button>
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
                                        <label>Market Score</label>
                                    </div>
                                    <div className="card-content">
                                        <ul className="indicator-text">
                                            <li><span className="circle" style={{ backgroundColor: '#5C86C1', }}></span><label className="name">Labor Competition</label></li>
                                            <li><span className="circle" style={{ backgroundColor: '#3FB7F3', }}></span><label className="name">Labor Sustainability</label></li>
                                            <li><span className="circle" style={{ backgroundColor: '#81CAB2', }}></span><label className="name">Labor Cost</label></li>
                                            <li><span className="circle" style={{ backgroundColor: '#F9D456', }}></span><label className="name">Labor Supply</label></li>
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
                                                            <span style={{ backgroundColor: '#F9D456', width: 'calc(25% + 18px)' }}>24.72</span>
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
                                                            <span style={{ backgroundColor: '#F9D456', width: 'calc(25% + 18px)' }}>24.72</span>
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
                                                            <span style={{ backgroundColor: '#F9D456', width: 'calc(25% + 18px)' }}>24.72</span>
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
                                                            <span style={{ backgroundColor: '#F9D456', width: 'calc(25% + 18px)' }}>24.72</span>
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
                                                            <span style={{ backgroundColor: '#F9D456', width: 'calc(25% + 18px)' }}>24.72</span>
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
                                        <label>Situational Map</label>
                                        <div className="labor-map-distance">
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

                                    <div className="map-control-wrapper">
                                        <div className="labor-map-controls">
                                            <MapControl />
                                            <div className="map-text">
                                                <label>Bluechip  MAP  DATA</label>
                                            </div>
                                        </div>
                                        <div className="multi-circle-chart-map-wrap">
                                            <img src="assets/images/medium.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={`${showFilter ? 'show': ''} labor-filter-sidebar`}>
                <div className="sidebar-inner">
                    <div className="sidebar-item-btn">
                        <button className="btn primary hide-trigger"  onClick={()=>setShowFilter(false)}>Hide Filters</button>
                    </div>
                    <div className="sidebar-item-wrapper">
                        <div className="sidebar-item">
                            <div className="sidebar-title">
                                <h4>Filters</h4>
                            </div>
                            <div className="input-item">
                                <select name="" id="">
                                    <option value="">All</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div className="input-item">
                                <select name="" id="">
                                    <option value="">All</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-title">
                                <h4>Weight</h4>
                            </div>
                            <div className="input-item">
                                <input type="text"  onFocus={handleFocus} onBlur={handleBlur} />
                                <label htmlFor="">Labor Supply</label>
                            </div>
                            <div className="input-item">
                                <input type="text"  onFocus={handleFocus} onBlur={handleBlur} />
                                <label htmlFor="">Labor Cost</label>
                            </div>
                            <div className="input-item">
                                <input type="text"  onFocus={handleFocus} onBlur={handleBlur} />
                                <label htmlFor="">Labor Sustainability</label>
                            </div>
                            <div className="input-item">
                                <input type="text"  onFocus={handleFocus} onBlur={handleBlur} />
                                <label htmlFor="">Labor Competition</label>
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
