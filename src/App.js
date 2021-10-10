import React from 'react';
import './App.css';
import Menu from './Menu';
import {Route , Link} from 'react-router-dom';
import Sample from './readdata/Sample';
import Test from './readdata/Test';
import Train from './readdata/Train';
import Trainimage from './readdata/Trainimage';
import Trainstudy from './readdata/Trainstudy';
function App() {
  return (
    <div className="App">
      <Route exact path="" component={Menu} />
      <Route exact path="/Sample" component={Sample} />
      <Route exact path="/Test" component={Test} /> 
      <Route exact path="/Train" component={Train} /> 
      <Route exact path="/Trainstudy" component={Trainstudy} />  
      <Route exact path="/Trainimage" component={Trainimage} />      
         
    </div>
  );
}

export default App;
