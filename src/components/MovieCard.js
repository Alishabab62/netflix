import React, { useState } from 'react'
import { IMAGE_CDN_LINK } from '../utils/constants'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  
    const {poster_path,original_title,id} = movie;
    const [hover,isHover] = useState(false);
    const navigate = useNavigate();
    function handleRouting(){
      navigate("/view/"+id);
    }
  return (
    <div className='relative md:w-44 w-20 mr-2 cursor-pointer bg-gradient-to-t from-black' onMouseOver={()=>isHover(true)} onMouseOut={()=>isHover(false)}>
        <img className='md:w-44 rounded-sm' src={IMAGE_CDN_LINK+poster_path} alt={original_title}/>
        {hover && <div className='absolute z-50 bottom-4 p-2'>
          <h1 className='text-white h-4'>{original_title}</h1>
          <button className='bg-slate-500 py-1 px-2 text-white rounded-md relative top-2' onClick={()=>handleRouting(id)}>Play Now</button>
        </div>}
    </div>
  )
}

export default MovieCard