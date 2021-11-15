import React, { useState } from 'react';
import './menu.css';
import Treev2 from './tree/index2';

function Menu() {
  return (
    <div>
    <div class="container" id="con">
      <div class="sidebar" >
      <Treev2 />
      </div>
    </div>
    </div>
  );
}

export default Menu;
