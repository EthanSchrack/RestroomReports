import React, { useState, useEffect } from 'react'

import MapPicker from 'react-google-map-picker'

const DefaultZoom = 15;

const MapPickerContainer = ({onChangeLocation}) => {

  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation (lat, lng){
    setLocation({lat:lat, lng:lng});
  }
  
  function handleChangeZoom (newZoom){
    setZoom(newZoom);
  }

  function handleResetLocation(){
    setDefaultLocation({ ... DefaultLocation});
    setZoom(DefaultZoom);
  }

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