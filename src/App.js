import logo from './logo.svg';
import './App.css';
import Tabscomp from './components/tabscomp.js';

import 'bootstrap/dist/css/bootstrap.css';

import React, {useState, useEffect } from 'react'


function App() {

  
  const [list, setlist] = useState(["Tab1", "Tab2","Tab3"]);

  return (
    

<div className="container">
      <div className="jumbotron bg-dark text-light">
     
      </div>
    
      <div className="row">
        <div className="col-sm-8">
          
          
        </div>   
      </div>

      <div className="row"> 
      <div className="col-sm-10">

 
     
       <Tabscomp  list = {list} setlist = { setlist}/>


     </div>
      </div>
    </div>

  );
}

export default App;
