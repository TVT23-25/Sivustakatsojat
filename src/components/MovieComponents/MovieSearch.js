import React, { useState } from 'react';

const MovieSearch = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = () => {
    onSearch(searchText);
  };

  return (
    <div>
      <input
        type="text" className='input-border'
        placeholder="Kirjoita hakusana"
        value={searchText}
        onChange={handleChange}
      />
      <button className='button-color' onClick={handleClick}>Hae</button>
    </div>
  );
};

export default MovieSearch;
