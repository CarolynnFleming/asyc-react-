import './App.css';
import { getFurniture, getMovies, getMusic, getShows } from './services/fetch-utils';
import MoviesList from './MoviesList';
import { useState, useEffect } from 'react';
import homer from './spinner.gif';
import MusicList from './MusicList';
import beyonce from './beyonce.gif';
import ShowsList from './ShowsList';
import yonce from './yonce.gif';
import FurnitureList from './FurnitureList';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [music, setMusic] = useState([]);
  const [musicLoading, setMusicLoading] = useState(false);
  const [shows, setShows] = useState([]);
  const [showsLoading, setShowsLoading] = useState(false);
  const [furntiture, setFurniture] = useState([]);
  const [furnitureLoading, setFurnitureLoading] = useState(false);

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
    setShows(data);
    setShowsLoading(false);
  }

  async function fetchFurnitureData() {
    setFurnitureLoading(true);
    const data = await getFurniture();
    setFurniture(data);
    setFurnitureLoading(false);
  }

  useEffect(() =>{
    fetchData();
    fetchMusicData();
    fetchShowsData();
    fetchFurnitureData();
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
      <h1>Shows</h1>
      {
        showsLoading
          ? <img src={yonce}/>
        
          : <ShowsList shows={shows}/>
      }
      <h1>Furniture</h1>
      {
        furnitureLoading
          ? <img src={yonce}/>

          : <FurnitureList furniture={furntiture}/>
      }
     
    </div>
  );
}

export default App;
