import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const TrailerContainer = ({movie}) => {
    const {id,original_title,overview} = movie;
  return (
    <div>
        <VideoTitle title={original_title} des = {overview}/>
        <VideoBackGround id={id}/>
    </div>
  )
}

export default TrailerContainer