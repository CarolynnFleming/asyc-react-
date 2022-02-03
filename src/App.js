import './App.css';
import { getMovies } from './services/fetch-utils';
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
