import './App.css';
import { getMovies } from './services/fetch-utils';
import MoviesList from './MoviesList';
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    const data = await getMovies();
    setLoading(false);
    setMovies(data);
  }
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
