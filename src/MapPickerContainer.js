import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'

const DefaultLocation = { lat: 33.949771, lng: -83.3722669};
const DefaultZoom = 15;

const MapPickerContainer = () => {

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
    <div id='mapDiv'>
  <button onClick={handleResetLocation}>Reset Location</button>
  <label>Latitute:</label><input type='text' value={location.lat} disabled/>
  <label>Longitute:</label><input type='text' value={location.lng} disabled/>
  <label>Zoom:</label><input type='text' value={zoom} disabled/>
  
    <MapPicker defaultLocation={defaultLocation}
    zoom={zoom}
    mapTypeId="roadmap"
    style={{height:'100px'}}
    onChangeLocation={handleChangeLocation} 
    onChangeZoom={handleChangeZoom}
    apiKey='AIzaSyAnLas5ZZCQin7XeX-PE1yaOITlTja8W04'/>
    </div>
  );
}

export default MapPickerContainer;