import logo from './logo.svg';
import React from 'react';
import './App.css';
import $ from 'jquery'
import Nav from './Components/Nav';
import MemeComponent from './Components/MemeComponent';




function App() {
  
  const [darkmode, setdarkmode]=React.useState(false)

  function toggledarkmode(){
    setdarkmode(prevmode=> !prevmode)
  }



  return (
    <div className="App">
      
      <Nav darkmode={darkmode} toggledarkmode={toggledarkmode}></Nav>
     <MemeComponent darkmode={darkmode}></MemeComponent>
    
    </div>
  );
}

export default App;

