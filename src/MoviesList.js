import React from 'react';

export default function MoviesList({ movies }) {
  return <div className='movie-list'>
    {movies.map(({ shows_name, is_classic, famous_directors, famous_actor }, i) => <div key={`${shows_name}-${i}`}>
      <h3>{shows_name}</h3>
      <p>{is_classic ? 'forever in our hearts' : 'generic'}</p>
      <li>{famous_directors}</li>
      <li>{famous_actor}</li>
    </div>)
    }
  </div>;
}
