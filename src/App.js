import logo from './logo.svg';
import './App.css';
import Hdr from './Hdr.js';
import Bathroom from "./Bathroom.js";
import Detail from "./Detail.js";
import ToiletList from './ToiletList.js';
import { useState, useEffect } from 'react';


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapWithMarkers from './MapsWithMarkers.js';

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
    rating: '3.0',
    image: bathroomPictureLink
  },
  {
    id: 'b3',
    name: 'Snelling toilet',
    description: 'hellooo',
    rating: '2.0',
    image: bathroomPictureLink
  }
]


function App() {
  useEffect(() => {
    updateBathrooms();
  }, []);


  const [bathroom, setBathroom] = useState(null);
  const [bathrooms, setBathrooms] = useState([]);
  const handleBathroomChange = b => {
    console.log(b);
    setBathroom(b);
  }
  
  const coordinates = [
    { lat: 33.9505255, lng: -83.3752532 }, // tate
    { lat: 33.939007914812656, lng: -83.37112344845274 }, // joe frank
    { lat: 33.938112288045616, lng: -83.36809391804614 }, // busbee hall
    { lat: 33.944787503212645, lng: -83.37645765229763}, // snelling
  ];

  const updateBathrooms = () => {
        setBathroom(null);
        fetch("http://localhost:8080/bathrooms", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
            }
      }).then((res) => {
          res.json().then(list => {
              console.log(list);
              setBathrooms(list);
          });
  
      });
  }

  return (
    <div>

      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
