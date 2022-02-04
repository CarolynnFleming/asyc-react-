import './App.css';
import { getMovies, getMusic, getShows } from './services/fetch-utils';
import MoviesList from './MoviesList';
import { useState, useEffect } from 'react';
import homer from './spinner.gif';
import MusicList from './MusicList';
import beyonce from './beyonce.gif';
import ShowsList from './ShowsList';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [music, setMusic] = useState([]);
  const [musicLoading, setMusicLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [showsLoading, setShowsLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const data = await getMovies();
    setLoading(false);
    setMovies(data);
  }

  async function fetchMusicData() {
    setMusicLoading(true);
    const data = await getMusic();
    setMusicLoading(false);
    setMusic(data);
  }
  async function fetchShowsData() {
    setShowsLoading(true);
    const data = await getShows();
    setShowsLoading(false);
    setShows(data);
  }

  useEffect(() =>{
    fetchData();
    fetchMusicData();
    fetchShowsData();
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
      <h1>Music</h1>
      {
        musicLoading
          ? <img src={beyonce}/>

          : <MusicList music={music}/>
      }
     
    </div>
  );
}

export default App;
