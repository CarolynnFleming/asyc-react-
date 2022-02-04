import React from 'react';

export default function ShowsList({ shows }) {
  return <div className='shows-list'>
    {
      shows.map(({ name, genre, director, good }, i) => <div key={`${name}-${i}`}>
        <h3>{name}</h3>
        <li>{genre}</li>
        <li>{director}</li>
        <p>{good ? 'Amazing' : 'Crazy'}</p>
      </div>)
    }
  </div>;
}
