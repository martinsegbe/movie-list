import React, { useState } from 'react';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && rating) {
      addMovie(title, rating);
      setTitle('');
      setRating('');
    } else {
      alert('Både titel och betyg måste anges');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Lägg till en film</legend>
        <div className="mb-3">
          <label htmlFor="title-field" className="form-label">Titel:</label>
          <input
            type="text"
            id="title-field"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating-field" className="form-label">Betyg:</label>
          <select
            id="rating-field"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">Spara film</button>
      </fieldset>
    </form>
  );
};

export default AddMovieForm;
