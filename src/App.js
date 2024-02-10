import logo from './logo.svg';
import './App.css';
import Hdr from './Hdr.js'
import Bathroom from "./Bathroom.js";

const bathrooms = [
  new Bathroom("Tate Bathroom"),
  new Bathroom("Joe Frank Bathroom"),
  new Bathroom("Snelling bathroom")
]

let bathroomElements = bathrooms.map(function(bathroom) {
  return <li>{bathroom.name}</li>;
});

function App() {
  return (
    <div>
      <Hdr />
      {bathroomElements}
    </div>
  );
}

export default App;
