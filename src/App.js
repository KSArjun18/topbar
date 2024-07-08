import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import CarSlider from './components/cardSlider';
import Rooms from './components/Rooms';

function App() {
  return (
    <div>
  <Navbar/>
  <CarSlider/>
  <Rooms/>
    </div>
  
  );
}

export default App;
