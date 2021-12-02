import React, { useRef, useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';

// var Layer = ReactMapboxGl.Layer;
// var Feature = mapboxgl.Feature;


const MapChart = () => {
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiYmFzYWxzbWFydHNvbHV0aW9ucyIsImEiOiJja3ZpZ2NtanNjazA3MnZuemt4ZnF6b2FoIn0.0oul5wnWu-7L_2HB0PTzCg'
    });
    return (
        <>
            <Map
                style="mapbox://styles/basalsmartsolutions/ckvtyjs1z2hcx14oyb5axlvlc"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
                zoom={[2]}
            >
                <Marker
                    coordinates={[-95.550000,38.770000]}
                    anchor="bottom">
                    <img src="assets/images/logo-icon.png" />
                </Marker>
            </Map>;
        </>
    )
}

export default MapChart;
