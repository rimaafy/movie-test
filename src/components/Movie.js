import React, { useState } from "react";
import Handler from "./Handler"; 

const Movie = ({ movie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="col-md-3">
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title text-center">{movie.Title}</h5>
        </div>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-poster"
          onClick={openModal} 
        />
        <p>({movie.Year})</p>
      </div>

      <Handler
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        movieTitle={movie.Title}
        moviePoster={movie.Poster}
        movieYear={movie.Year}
      />
    </div>
  );
};

export default Movie;
