import React from 'react';
import './loading.style.scss'

const Loading = () => {
    return (
        <>
            <section className="loading-sec">
                <div className="loading-content-wrapper">
                    <div className="loading-content">
                        <div className="img">
                            <img src="assets/images/esrp-logo-loading.png" alt="" className="dark"/>
                            <img src="assets/images/esrp-logo-loading-light.png" alt="" className="light"/>
                        </div>
                        <div className="progress-bar-wrapper">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'75%'}}></div>
                                <div className="progress-bar-back"></div>
                            </div>
                            <span>76% Completed</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loading;
