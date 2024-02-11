import React, { useRef, useEffect } from 'react';

const MapWithMarkers = ({ coordinates }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 33.949771, lng: -83.3722669 },
        zoom: 15,
      });

      console.log("PASSED COORDINATES");
      console.log(coordinates);
      coordinates.forEach(coord => {
        
        new window.google.maps.Marker({
          position: coord,
          map: map,
          icon: {
            url: `data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16">${String.fromCodePoint(0x1F4A9)}</text></svg>`,
          }
        });
      });
    }
  }, [coordinates]);

  return <div ref={mapRef} style={{ height: '800px', width: '100%' }} />;
};

export default MapWithMarkers;
