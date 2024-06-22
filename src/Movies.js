import React from 'react';
import Movie from './Movie';

const Movies = ({ movies, removeMovie }) => {
  return (
    <ul id="movies" className="list-group">
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} removeMovie={removeMovie} />
      ))}
    </ul>
  );
};

export default Movies;
