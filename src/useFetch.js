import { useState, useEffect } from 'react';
import { getMovies, getMusic, getShows } from './services/fetch-utils';


export default function useFetch() {
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

    const data = await getMusic;

    setMusicLoading(false);
    setMusic(data);
  }

  async function fetchShowsData() {
    setShowsLoading(true);

    const data = await getShows();

    setShowsLoading(false);
    setShows(data);
  }
  useEffect(() => {
    fetchData();
    fetchMusicData();
  }, []);
  return {
    movies, setMovies, isLoading, setLoading, music, setMusic, musicLoading, setMusicLoading
  };
}

