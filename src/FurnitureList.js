import React from 'react';

export default function FurnitureList({ furniture }) {
  return <div className='furniture-list'>
    {
      furniture.map(({ name, color, texture, is_needed }, i) => <div key={`${name}-${i}`}>
        <h3>{name}</h3>
        <p>{is_needed ? 'for sure' : 'not at all'}</p>
        <li>{color}</li>
        <li>{texture}</li>
      </div>)
    }
  </div>;
}
