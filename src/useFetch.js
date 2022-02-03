import { useState, useEffect } from 'react';
import { getMovies } from './services/fetch-utils';

export default function useFetch() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setisLoading] = useState(false);
  return <div></div>;
}
