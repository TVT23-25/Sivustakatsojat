import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieSearch from '../components/MovieComponents/MovieSearch';
import Filter from '../components/MovieComponents/Filter';

const MoviePage = () => {
  const [mediaData, setMediaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (searchTerm) {
      getSearchResults(searchTerm);
    } else {
      getTrendingMediaData("movie");
    }
  }, [searchTerm]);

  async function getTrendingMediaData(type) {
    try {
      const apiKey = '472624d51a1f4be9ba4953b610d352aa';
      let resp = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&language=en-US`);
      setMediaData(resp.data.results);
    } catch (e) {
      console.error('Error fetching media data:', e);
    }
  }

  async function getSearchResults(term) {
    try {
      const apiKey = '472624d51a1f4be9ba4953b610d352aa';
      let resp = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${term}`);
      setMediaData(resp.data.results);
    } catch (e) {
      console.error('Error fetching search results:', e);
    }
  }

  useEffect(() => {
    // Filter and search logic
    const filteredData = mediaData.filter(media => {
      // Filter based on filter type
      if (filter === 'suosituimmat' && media.popularity < 100) {
        return false;
      }
      if (filter === 'uusimmat' && new Date(media.release_date || media.first_air_date) < new Date('2022-01-01')) {
        return false;
      }
      if (filter === 'vanhimmat' && new Date(media.release_date || media.first_air_date) >= new Date('2022-01-01')) {
        return false;
      }
      return true;
    });
 
    setFilteredMediaData(filteredData);
  }, [filter, mediaData]);

  
  const [filteredMediaData, setFilteredMediaData] = useState([]);

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div className="MoviePageContainer">
      <h1>Hae elokuvia tai sarjoja</h1>
      <MovieSearch onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      <ul className="MovieList">
        {filteredMediaData.map(media => (
          <li key={media.id} className="MovieItem">
            <img src={`https://image.tmdb.org/t/p/w154${media.poster_path}`} alt={media.title || media.name} />
            <p>{media.title || media.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;