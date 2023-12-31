import React from 'react'
import { useNavigate } from 'react-router-dom';

const VideoTitle = ({ title, des,id }) => {
  const navigate = useNavigate();
  function handleRouting(id){
    navigate("/view/"+id);
  }
  return (
    <div className="w-full md:h-[550px] h-[250px]  absolute text-white bg-gradient-to-r from-black">
      <div className='relative md:top-[150px] top-[60px] h-[200px] md:pl-20 pl-4'>
          <h1 className='md:text-2xl text-sm font-bold'>{title}</h1>
          <p className='md:w-1/4 w-3/4 mt-1 md:text-lg text-xs'>{des}</p>
          <div className='mt-2'>
            <button className='md:px-6 px-4 py-1 md:py-2 mr-2 bg-gray-400 rounded-md text-white'  onClick={()=>handleRouting(id)}>▶️ Play Now</button>
            <button className='md:px-6 px-4 py-1 md:py-2 mr-2 bg-gray-400 rounded-md text-white'>ℹ️More Info</button>
          </div>
      </div>
    </div>
  );
};


export default VideoTitle