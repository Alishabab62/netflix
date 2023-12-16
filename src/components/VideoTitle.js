import React from 'react'

const VideoTitle = ({title,des}) => {
  return (
    <div className='pt-36 pl-16'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='w-1/4 mt-1'>{des}</p>
        <div className='mt-2'>
            <button className='px-6 py-2 mr-2 bg-gray-400 rounded-md text-white'>▶️ Play Now</button>
            <button className='px-6 py-2 mr-2 bg-gray-400 rounded-md text-white'>ℹ️More Info</button>    
        </div>
    </div>
  )
}

export default VideoTitle