import React from 'react';

const MapDistance = () => {
    return (
        <>
            <div className="map-distance-wrapper">
                <span className="label">Drive Time:</span>
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
        </>
    )
}

export default MapDistance;
