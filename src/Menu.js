import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Treed from './tree/index';

function Menu() {
  
  return (
    <div><Navbar />
    <div class="container">
      
      <div class="nav">
      <Treed />
      </div>

      <div class="main">
      content
      </div>
    </div>
    </div>
  );
}

export default Menu;
