import React, {  } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import TrailerContainer from './TrailerContainer'
import MoviesContainer from './MoviesContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import GptSearch from './GptSearch'


const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
    useTrendingMovies();
    const nowPlayingMovies = useSelector(store => store.movies);
    const gpt = useSelector(store => store.gpt);
    if(!nowPlayingMovies.nowPlayingMovies) return;
    const trailerMovie = nowPlayingMovies?.nowPlayingMovies?.results[0];
    
  return (
    <div>
        <Header/>
        {
          gpt.toggleGpt ? <GptSearch/> : <><TrailerContainer movie = {trailerMovie}/>
          <MoviesContainer/></>
        }
    </div>
  )
}

export default Browse