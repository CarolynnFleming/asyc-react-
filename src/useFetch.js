import { useState, useEffect } from 'react';
import { getMovies, getMusic, getShows, getFurniture } from './services/fetch-utils';


export default function useFetch() {
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

    setShowsLoading(false);
    setShows(data);
  }

  async function fetchFurnitureData() {
    setFurnitureLoading(true);
    const data = await getFurniture();
    setFurniture(data);
    setFurnitureLoading(false);
  }
  useEffect(() => {
    fetchData();
    fetchMusicData();
    fetchShowsData();
    fetchFurnitureData();
  }, []);
  return {
    movies, setMovies, isLoading, setLoading, music, setMusic, musicLoading, setMusicLoading, shows, setShows, showsLoading, setShowsLoading, 
  };
}

