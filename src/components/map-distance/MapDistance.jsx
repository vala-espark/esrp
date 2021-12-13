import React from 'react';

const MapDistance = () => {
    return (
        <>
            <div className="map-distance-wrapper">
                <span className="label">Drive Time:</span>
                <ul>
                    <li>
                        <a>1min</a>
                    </li>
                    <li>
                        <a>5min</a>
                    </li>
                    <li className="active">
                        <a>15min</a>
                    </li>
                    <li>
                        <a>30min</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MapDistance;
