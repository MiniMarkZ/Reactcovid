import React from 'react';
import './App.css';
import Images from './Images';
import Input from './Input';
import Navbar from './navbar';

function Menu() {
  return (
    <div>
        <Navbar />
        <Input />
        <Images />
    </div>
  );
}

export default Menu;
