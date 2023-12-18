import React from 'react'
import useGetTrailer from '../hooks/useGetTrailer'
import { useSelector } from 'react-redux';

const VideoBackGround = ({ id }) => {
    useGetTrailer(id);
    const data = useSelector((store) => store.movies?.trailerMovie);
    
    return (
      <div className="w-full md:h-[550px] h-[250px]">
        <iframe
          className='w-full md:h-[550px] h-[250px]'
          src={"https://www.youtube.com/embed/" + data?.key +"?controls = 0 &autoplay=1&mute=1&showinfo=0&allow=autoplay"}
          title="YouTube video player"
          
        ></iframe>
      </div>
    );
  };
export default VideoBackGround