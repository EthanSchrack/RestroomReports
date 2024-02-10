import logo from './logo.svg';
import './App.css';
import Hdr from './Hdr.js';
import Bathroom from "./Bathroom.js";
import Detail from "./Detail.js";
import ToiletList from './ToiletList.js';
import { useState, useEffect } from 'react';

import UGAMap from './map.js'; 

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


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

const mapMarkers = [  
'33.9569,-83.3743', // Tate
'33.9563,-83.3723'  // Joe Frank
];

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
  useEffect(() => {
    updateBathrooms();
  }, []);

  const [bathroom, setBathroom] = useState(null);
  const [bathrooms, setBathrooms] = useState([]);
  const handleBathroomChange = b => {
    console.log(b);
    setBathroom(b);
  }

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
          <Route path="/toilets" element={
            <React.Fragment>
              <Detail bathroom={bathroom} onNeedsUpdate={updateBathrooms}/>
              <ToiletList toilets={bathrooms} onBathroomChange={handleBathroomChange} />
            </React.Fragment>
          } />
          <Route path='/explore' element={
            <React.Fragment>
              <p1>Map here...</p1>
            </React.Fragment>
          } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
