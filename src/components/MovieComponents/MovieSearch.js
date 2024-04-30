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
        type="text"
        placeholder="Kirjoita hakusana"
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Hae</button>
    </div>
  );
};

export default MovieSearch;
