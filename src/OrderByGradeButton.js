import React from 'react';

const OrderByGradeButton = ({ sortMovies }) => {
  return (
    <button className="btn btn-primary" onClick={sortMovies}>Sortera efter betyg</button>
  );
};

export default OrderByGradeButton;
