import { checkError, client } from './client';

export async function getMovies(){
  const response = await client
    .from('movies')
    .select();

  return checkError(response);
}

export async function getMusic(){
  const response = await client
    .from('music')
    .select();

  return checkError(response);
}

export async function getShows(){
  const response = await client
    .from('shows')
    .select();
    

  return checkError(response);
}

export async function getFurniture() {
  const response = await client
    .from('furniture')
    .select();

  return checkError(response);
}