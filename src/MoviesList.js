import React from 'react';

export default function MoviesList({ movies }) {
  return <div>
    {movies.map(({ name, is_classic, famous_directors, famous_actor }, i) => <div key={`${name}-${i}`}>
      <p>{name}</p>
      <p>{is_classic ? 'forever in our hearts' : 'generic'}</p>
      <ul>{famous_directors}</ul>
      <ul>{famous_actor}</ul>
    </div>)
    }
  </div>;
}
