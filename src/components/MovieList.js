import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movie,color}) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white" style={{color:color}}>{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movie?.map((movie) => (
            <MovieCard color={color} key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList