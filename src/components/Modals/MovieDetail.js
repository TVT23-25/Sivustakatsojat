import React from 'react'
import './MovieDetail.css'

const MovieModal = ({ movie, closeModal }) => {
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title || movie.name} className="MoviePoster" />
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <button onClick={closeModal}>Sulje</button>
      </div>
    </div>
  );
};

export default MovieModal
