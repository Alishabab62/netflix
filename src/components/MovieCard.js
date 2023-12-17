import React from 'react'
import { IMAGE_CDN_LINK } from '../utils/constants'

const MovieCard = ({movie}) => {
    const {poster_path} = movie;
  return (
    <div className='md:w-44 w-20 mr-2'>
        <img className='md:w-44 rounded-sm' src={IMAGE_CDN_LINK+poster_path} alt=''/>
    </div>
  )
}

export default MovieCard