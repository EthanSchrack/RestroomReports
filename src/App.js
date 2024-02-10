import logo from './logo.svg';
import './App.css';
import Hdr from './Hdr.js';
import Bathroom from "./Bathroom.js";
import Detail from "./Detail.js";
import ToiletList from './ToiletList.js';
import { useState } from 'react';
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

  const handleBathroomChange = b => {
    console.log(b);
    setBathroom(b);
  }

  return (
    <div>
      <BrowserRouter>
        <Hdr />
        <Routes>
          <Route path="/toilets" element={
            <React.Fragment>
              <Detail bathroom={bathroom}/>
              <ToiletList toilets={bathroomList} onBathroomChange={handleBathroomChange} />
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
