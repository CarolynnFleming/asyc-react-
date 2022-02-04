import './App.css';
import { getMovies, getMusic } from './services/fetch-utils';
import MoviesList from './MoviesList';
import { useState, useEffect } from 'react';
import homer from './spinner.gif';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [music, setMusic] = useState([]);
  const [musicLoading, setMusicLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    const data = await getMovies();
    setLoading(false);
    setMovies(data);
  }

  useEffect(() =>{
    fetchData();
  }, []);


  return (
    <div className="App">
      <button onClick={fetchData}>Refetch</button>
      <h1>Movies</h1>
      {
        isLoading
          ? <img src={homer}/>

          : <MoviesList movies={movies}/>
      }
     
    </div>
  );
}

export default App;
