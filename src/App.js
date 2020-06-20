import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/side'
import Main from './components/main';


function App() {
  return (
    <div class='container-fluid'>
      <div class = 'row'>
        
        <Sidebar/>
        <Main/>
      </div>
      
      
    </div>
  );
}

export default App;
