import React from 'react';

export default function MusicList({ music }) {
  return <div className='music-list'>
    {
      music.map(({ artist_name, playlist, is_star, song }, i) => <div key={`${artist_name}-${i}`}>
        <h3>{artist_name}</h3>
        <li>{playlist}</li>
        <li>{song}</li>
        <p>{is_star ? 'A bop' : 'A flop'}</p>
      </div>)
    }

  </div>;
}
