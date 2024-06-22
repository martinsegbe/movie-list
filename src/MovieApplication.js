import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';

const MovieApplication = () => {
  const [movies, setMovies] = useState([]);
  const [sortType, setSortType] = useState(null);

  const addMovie = (title, rating) => {
    setMovies([...movies, { title, rating }]);
  };

  const removeMovie = (title) => {
    setMovies(movies.filter(movie => movie.title !== title));
  };

  const sortMovies = (type) => {
    let sortedMovies;
    if (type === 'alpha') {
      sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === 'grade') {
      sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    }
    setMovies(sortedMovies);
    setSortType(type);
  };

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm addMovie={addMovie} />
      <div className="my-3">
        <OrderByAlphaButton sortMovies={() => sortMovies('alpha')} />
        <OrderByGradeButton sortMovies={() => sortMovies('grade')} />
      </div>
      <Movies movies={movies} removeMovie={removeMovie} />
    </div>
  );
};

export default MovieApplication;
