import React, { useState, useEffect } from 'react'

const DefaultZoom = 15;

const MapPickerContainer = ({onLocationChange}) => {

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
        onLocationChange(mapsMouseEvent.latLng.toJSON().lat, mapsMouseEvent.latLng.toJSON().lng);
      });
    };

    if (!window.google) {
      // Google Maps API script hasn't been loaded yet
      console.error("Google Maps API not loaded");
      return;
    }

    // Initialize the map 
    initMap();
  }, []);

  return (
    <div>
        <div id='map' style={{height: '400px' }}></div>
     
    </div>
  );
}

export default MapPickerContainer;