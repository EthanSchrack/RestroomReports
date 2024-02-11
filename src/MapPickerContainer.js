import React, { useState, useEffect } from 'react'

import MapPicker from 'react-google-map-picker'

const DefaultZoom = 15;

const MapPickerContainer = () => {

  const [clickedLatLng, setClickedLatLng] = useState(null);

  useEffect(() => {
    const initMap = () => {
      const myLatlng = { lat: 33.949771, lng: -83.3722669};
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: DefaultZoom,
        center: myLatlng,
      });

      map.addListener("click", (mapsMouseEvent) => {
        setClickedLatLng(mapsMouseEvent.latLng.toJSON());
      });
    };

    if (!window.google) {
      // Google Maps API script hasn't been loaded yet
      console.error("Google Maps API not loaded");
      return;
    }

    // Initialize the map when the component mounts
    initMap();
  }, []);

  return (
    <div>
        <div id='map' style={{height: '400px' }}></div>
        {clickedLatLng && (
        <div>
          <h2>Clicked Location</h2>
          <p>Latitude: {clickedLatLng.lat}</p>
          <p>Longitude: {clickedLatLng.lng}</p>
        </div>
      )}
     
    </div>
  );
}

export default MapPickerContainer;