import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './components/Navbar/Navbar'
import spaceImg from './images/SpaceX.jpg'
import Launches from './components/Launches/Launches'


function App() {
  return (
    <>
    <Navbar/>
    <Launches/>
    </>
  );
}


export default App;
