import React from 'react';

const Movie = ({ movie, removeMovie }) => {
  const { title, rating } = movie;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{title} ({'★'.repeat(rating)})</span>
      <button className="btn btn-danger" onClick={() => removeMovie(title)}>X</button>
    </li>
  );
};

export default Movie;
