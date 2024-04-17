import React, { useState, useEffect } from 'react'
import { searchMovies, getHarryPotterAndJaneAustenMovies } from '../api'
import MovieSearch from '../components/MovieComponents/MovieSearch'
import Filter from '../components/MovieComponents/Filter'
import MovieModal from '../components/Modals/MovieDetail'

const MoviePage = () => {
  const [mediaData, setMediaData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)

  const handleSearch = (term) => {
    // Tarkistetaan, onko hakutermi joko "harry potter" tai "jane austen"
    if (term.toLowerCase() === 'harry potter' || term.toLowerCase() === 'jane austen') {
      setSearchTerm(term);
    } else {
      // Jos hakutermi ei ole "harry potter" tai "jane austen", nollataan hakutermi ja näytetään ainoastaan valmiiksi haetut elokuvat
      setSearchTerm('');
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const initialData = await getHarryPotterAndJaneAustenMovies()
        setMediaData(initialData)
      } catch (error) {
        console.error('Error fetching initial data:', error)
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm)
        .then(results => {
          console.log('Search results:', results)
          setMediaData(results);
        })
        .catch(error => console.error('Error searching movies:', error))
    }
  }, [searchTerm]);

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
    setFilteredMediaData(filteredData)
  }, [filter, mediaData])

  const [filteredMediaData, setFilteredMediaData] = useState([])

  const handleFilter = (filterType) => {
    setFilter(filterType)
  }

  const openModal = (movie) => {
    setSelectedMovie(movie)
  }

  const closeModal = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="MoviePageContainer">
      <h1>Hae elokuvia tai sarjoja</h1>
      <MovieSearch onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      <ul className="MovieList">
        {filteredMediaData.map(media => (
          <li key={media.id} className="MovieItem" onClick={() => openModal(media)}> 
            <img src={`https://image.tmdb.org/t/p/w154${media.poster_path}`} alt={media.title || media.name} />
            <p>{media.title || media.name}</p>
          </li>
        ))}
      </ul>
      {selectedMovie && <MovieModal movie={selectedMovie} closeModal={closeModal} />}

    </div>
  )
}

export default MoviePage