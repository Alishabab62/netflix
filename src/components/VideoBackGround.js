import React from 'react'
import useGetTrailer from '../hooks/useGetTrailer'

const VideoBackGround = ({id}) => {
    
    const data = useGetTrailer(id);
    
  return (
    <div>
        <iframe width="560"
         height="315"
        src={"https://www.youtube.com/embed/" + data}
         title="YouTube video player"allow=""></iframe>
    </div>
  )
}

export default VideoBackGround