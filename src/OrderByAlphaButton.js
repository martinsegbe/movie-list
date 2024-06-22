import React from 'react';

const OrderByAlphaButton = ({ sortMovies }) => {
  return (
    <button className="btn btn-primary me-2" onClick={sortMovies}>Sortera alfabetiskt</button>
  );
};

export default OrderByAlphaButton;
