import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const GptShimmer = () => {
  return (
    <div className='p-4 flex overflow-x-scroll mb-7'>
      <div className='flex no-scrollbar'>
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
        <Skeleton height={320} width={170} className='mr-2 ' />
</div>
    </div>

  )
}

export default GptShimmer