import React from 'react';

export default function ShowsList({ shows }) {
  return <div className='show-list'>
    {
      shows.map(({ shows_name, genre, director, is_good }, i) => <div key={`${shows_name}-${i}`}>
        <h3>{shows_name}</h3>
        <p>{is_good ? 'Amazing' : 'Crazy'}</p>
        <li>{genre}</li>
        <li>{director}</li>
      </div>)
    }
  </div>;
}
