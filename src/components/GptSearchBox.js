import React from 'react'

const GptSearchBox = () => {
  return (
    <div className='md:pt-[5%] pt-[13%] flex justify-center'>
        <form className='bg-black md:w-1/2 w-full p-4 flex justify-center rounded-lg'>
            <input className='w-3/4 p-4 rounded-lg outline-none' placeholder='Search Here'/>
            <button className='bg-red-500  md:px-14 px-5 text-white font-bold py-4 ml-2 rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBox