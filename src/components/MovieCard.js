import React, { useState } from 'react'
import { IMAGE_CDN_LINK } from '../utils/constants'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  // console.log(movie)
  
    const {poster_path,original_title,id} = movie;
    const [hover,isHover] = useState(false);
    const navigate = useNavigate();
    console.log(poster_path)
    if(!poster_path) return;
    function handleRouting(){
      navigate("/view/"+id);
    }
  return (
    <div className='relative w-32  md:w-44 lg:w-56 mr-2 cursor-pointer bg-gradient-to-t from-black' onMouseOver={() => isHover(true)} onMouseOut={() => isHover(false)}>
  <img className='md:w-44 lg:w-56 rounded-sm w-36' src={IMAGE_CDN_LINK + poster_path} alt={original_title} />
  {hover && (
    <div className='w-full absolute z-50 bottom-0 rounded-t-lg p-1 md:h-1/3 h-2/4 flex flex-col justify-between bg-black bg-opacity-60'>
      <h1 className='text-white text-sm md:text-lg lg:text-xl md:h-[55px] h-[45px] block overflow-hidden'>{original_title}</h1>
      <button className='bg-slate-500 py-1  md:px-2 px-0 w-[90%] text-sm text-white rounded-md' onClick={() => handleRouting(id)}>Play Now</button>
    </div>
  )}
</div>


  )
}

export default MovieCard