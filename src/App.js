import logo from './logo.svg';
import './App.css';
import Hdr from './Hdr.js';
import Bathroom from "./Bathroom.js";
import Detail from "./Detail.js";
import ToiletList from './ToiletList.js';
import { useState } from 'react';
import UGAMap from './map.js'; 

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
  const [bathroom, setBathroom] = useState(null);

  const handleBathroomChange = b => {
    console.log(b);
    setBathroom(b);
  }

  return (
    <div>
      <Hdr />
      <Detail bathroom={bathroom}/>
      {/* {bathroomElements} */}
      <ToiletList toilets={bathroomList} onBathroomChange={handleBathroomChange} />
      <UGAMap markers ={mapMarkers}/> 
    </div>
  );
}

export default App;
