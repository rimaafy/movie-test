import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";
import Handler from "./components/Handler";

const MOVIE_API = "http://www.omdbapi.com/?s=barbie&apikey=ef17258a";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // State untuk mengontrol tampilan modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((jsonres) => {
        setMovies(jsonres.Search);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    fetch(
      searchValue !== ""
        ? `http://www.omdbapi.com/?s=${searchValue}&apikey=ef17258a`
        : `http://www.omdbapi.com/?s=barbie&apikey=ef17258a`
    )
      .then((res) => res.json())
      .then((jsonres) => {
        setMovies(jsonres.Search);
        setLoading(false);
      });
  };

  const handleMovieClick = (title) => {
    setSelectedMovie(title);
    setIsModalOpen(true);
  };

  const closeHandler = () => {
    setIsModalOpen(false);
  };

  const handleMovies = (movies) => {
    return loading ? (
      <span>loading...</span>
    ) : movies !== undefined ? (
      movies.map((movie, index) => (
        <Movie
          key={index}
          movie={movie}
          onMovieClick={handleMovieClick}
        />
      ))
    ) : (
      <span>There is no movie</span>
    );
  };

  return (
    <div className="container">
      <Header appTitle="Movie App" />
      <Search search={search} />
      {selectedMovie && (
        <Handler
          isOpen={isModalOpen}
          onRequestClose={closeHandler}
          movieTitle={selectedMovie}
        />
      )}
      <div className="row">{handleMovies(movies)}</div>
    </div>
  );
};

export default App;
