import React from 'react';
import './App.css';
import Menu from './Menu';
import Home from './home';
import {Route , Link} from 'react-router-dom';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <Page /> 
      <Route exact path="/" component={Home} />
      <Route exact path="/Menu" component={Menu} />  
    </div>
  );
}

export default App;
