import React from 'react';

export default function MoviesList({ movies }) {
  return <div className='movie-list'>
    {movies.map(({ name, is_classic, famous_directors, famous_actor }, i) => <div key={`${name}-${i}`}>
      <h3>{name}</h3>
      <p>{is_classic ? 'forever in our hearts' : 'generic'}</p>
      <li>{famous_directors}</li>
      <li>{famous_actor}</li>
    </div>)
    }
  </div>;
}
