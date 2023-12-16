import React, {  } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import TrailerContainer from './TrailerContainer'
import MoviesContainer from './MoviesContainer'


const Browse = () => {

    useNowPlayingMovies();
    const nowPlayingMovies = useSelector(store => store.movies);
    if(!nowPlayingMovies.nowPlayingMovies) return;
    const trailerMovie = nowPlayingMovies?.nowPlayingMovies?.results[0];
    
  return (
    <div>
        <Header/>
        <TrailerContainer movie = {trailerMovie}/>
        <MoviesContainer/>
    </div>
  )
}

export default Browse