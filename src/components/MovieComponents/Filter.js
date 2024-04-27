import React, { useEffect, useState } from 'react'
//import './App.css'
import axios from 'axios'
//import Filter from './Filter'
import MovieSearch from './MovieSearch'
import './Filter.css';


const Filter = ({ onFilter }) => {
  const handleClick = (filterType) => {
    onFilter(filterType);
  };

  return (
    <div>
      <h2>Suodattimet</h2>
      <button onClick={() => handleClick('suosituimmat')}>Suosituimmat</button>
      <button onClick={() => handleClick('uusimmat')}>Uusimmat</button>
      <button onClick={() => handleClick('vanhimmat')}>Vanhimmat</button>
    </div>
  );
};

export default Filter;





