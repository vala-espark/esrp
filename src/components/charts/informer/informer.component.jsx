import React from 'react';
import './informer.style.scss';

const Informer = () => {
    return (
        <>
            <div className="card informer-card">
                <div className="card-body">
                    <div className="informer-item">
                        <div className="card-title">
                            <label htmlFor="">Total earning</label>
                        </div>
                        <div className="chart-price">
                            <h4>$12,875
                                <span className="up">&#9650;12%</span>
                                {/* <span className="down">&#9660;12%</span> */}
                            </h4>
                        </div>
                        <div className="summary">
                            <label htmlFor="">Compared to $21,490 last year</label>
                        </div>
                    </div>
                    <div className="informer-item">
                        <div className="card-title">
                            <label htmlFor="">Total earning</label>
                        </div>
                        <div className="chart-price">
                            <h4>$15,251
                                <span className="up">&#9650;02%</span>
                                {/* <span className="down">&#9660;12%</span> */}
                            </h4>
                        </div>
                        <div className="summary">
                            <label htmlFor="">Compared to $21,490 last year</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Informer;
