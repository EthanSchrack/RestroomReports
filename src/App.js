import logo from './logo.svg';
import './App.css';
import Hdr from './Hdr.js';
import Bathroom from "./Bathroom.js";
import Detail from "./Detail.js";

const bathroomPictureLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/VillaMitre50.jpg/1280px-VillaMitre50.jpg";

const bathrooms = [
  new Bathroom("Tate Bathroom", "abcd", 5.0, bathroomPictureLink),
  new Bathroom("Joe Frank Bathroom", "abcd", 5.0, bathroomPictureLink),
  new Bathroom("Snelling bathroom", "abcd", 5.0, bathroomPictureLink)
]

let bathroomElements = bathrooms.map(function(bathroom) {
  return (
    <div class="bathroom-element">
      <span>
        <img src={bathroom.image} width="75px" height="75px"/>
        {bathroom.name}
        ({bathroom.rating}/5)
      </span>
    </div>
  )
});

function App() {
  return (
    <div>
      <Hdr />
      <Detail />
      {bathroomElements}
    </div>
  );
}

export default App;
