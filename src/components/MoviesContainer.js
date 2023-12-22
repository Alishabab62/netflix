import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MoviesContainer = () => {
  const movies = useSelector(store => store.movies);
  if(!movies.nowPlayingMovies || !movies.popularMovie || !movies.topRatedMovie || !movies.upComingMovie || !movies.trendingMovie) return
  // console.log(movies);

  return (
    <div className=' bg-black'>
      <div className='relative md:-mt-48 -mt-24 z-20'>
          <MovieList color="white" title={"Now Playing"} movie={movies.nowPlayingMovies.results}/>
          <MovieList title={"Trending Today"} movie={movies.trendingMovie.results}/>
          <MovieList title={"Top Rated"} movie={movies.topRatedMovie.results}/>
          <MovieList title={"Popular"} movie={movies.popularMovie.results}/>
          <MovieList title={"Coming Soon"} movie={movies.upComingMovie.results}/>
      </div>
    </div>
  )
}

export default MoviesContainer