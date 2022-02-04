import { useState, useEffect } from 'react';
import { getMovies, getMusic } from './services/fetch-utils';


export default function useFetch() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [music, setMusic] = useState([]);
  const [musicLoading, setMusicLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
  
    const data = await getMovies();
    
    setLoading(false);
    setMovies(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return {
    movies, isLoading, setLoading,
  };
}

