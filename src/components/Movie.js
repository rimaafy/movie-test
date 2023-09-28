// membuat movie list
// import komponen
import React, { useState } from "react";
import Handler from "./Handler"; //import file dari handler.js

const Movie = ({ movie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true); //open pop up saat item film di klik
  };

  const closeModal = () => {
    setModalIsOpen(false); //close pop up saat tombol "X" di klik
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
          onClick={openModal} //open pop up saat poster di klik
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
