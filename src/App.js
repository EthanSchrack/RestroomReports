import logo from './logo.svg';
import './App.css';
import Hdr from './Hdr.js';
import Bathroom from "./Bathroom.js";
import Detail from "./Detail.js";
import ToiletList from './ToiletList.js';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Poop from './Poop.js';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapWithMarkers from './MapsWithMarkers.js';
import MapPickerContainer from './MapPickerContainer.js';


const bathroomPictureLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/VillaMitre50.jpg/1280px-VillaMitre50.jpg";



// let bathroomElements = bathrooms.map(function(bathroom) {
//   return (
//     <div class="bathroom-element">
//       <span>
//         <img src={bathroom.image} width="75px" height="75px"/>
//         {bathroom.name}
//         ({bathroom.rating}/5)
//       </span>
//     </div>
//   )
// });

const bathroomList = [
  {
    id: 'b1',
    name: 'Terry toilet',
    description: 'hellooo',
    rating: '5.0',
    image: bathroomPictureLink
  },
  {
    id: 'b3',
    name: 'Snelling toilet',
    description: 'hellooo',
    rating: '5.0',
    image: bathroomPictureLink
  }
]



function App() {

  const [bathroom, setBathroom] = useState(null);
  const [bathrooms, setBathrooms] = useState([]);
  const handleBathroomChange = b => {
    console.log(b);
    setBathroom(b);
  }
  
  const [coordinates, setCoordinates] = useState([]);
  
  const updateBathrooms = () => {
        setBathroom(null);
        fetch("http://localhost:8080/bathrooms", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
            }
      }).then((res) => {
          res.json().then(list => {
              let coords = [];
              setBathrooms(list);
              console.log('here1');

              setCoordinates([]);
              console.log('here2');
              list.forEach(bathroom => {
                console.log(`latitude ${bathroom?.latitude} longitude ${bathroom?.longitude}`);
                console.log('here3');
                coords.push({lat: parseFloat(bathroom?.latitude), lng: parseFloat(bathroom?.longitude)});
                setCoordinates(coords);
              });
          });
  
      });
  }
  useEffect(() => {
    updateBathrooms();
  }, []);
  return (
    <div >

      <BrowserRouter>
      <Poop />
      <span id='poop1' class='poop'></span>
      <span id='poop2' class='poop'></span>
      <span id='poop3' class='poop'></span>
      <span id='poop4' class='poop'></span>


        <Hdr />
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Detail bathroom={bathroom} onNeedsUpdate={updateBathrooms}/>
              <ToiletList toilets={bathrooms} onBathroomChange={handleBathroomChange} />
            </React.Fragment>
          } />
          <Route path='/explore' element={
            <React.Fragment>
              <p1>Map here...</p1>
              <MapWithMarkers coordinates={coordinates} />
            </React.Fragment>
          } />
          <Route path='*' element={
            <div>
              <h3>Error</h3>
              <p>Page not found.</p>
            </div>
          }/>
        </Routes>
      </BrowserRouter>

    </div>
  );


}

export default App;
