import React, { useState } from 'react'
// import openai from '../utils/openAi';
import  { getMovies } from '../hooks/getMovies';
import { useDispatch } from 'react-redux';
import { addSearchResult } from '../utils/gptSlice';

const GptSearchBox = () => {
  const[input,setInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    // console.log(input)
      // try {
      //   const query =
      //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
      //   input +
      //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      //   const data = await openai.chat.completions.create({
      //     messages: [{ role: 'user', content: query}],
      //     model: 'gpt-3.5-turbo',
      //   });
      //   console.log(data);
      // } catch (error) {
      //   console.log(error)
      // }
      const q = [input];
      const data = q.map((q)=>getMovies(q))
      const finalData = await Promise.all(data)
      dispatch(addSearchResult({result:finalData,query:q}));
    }

  return (
    <div className='md:pt-[5%] pt-[20%] mx-2 flex justify-center'>
        <form className='bg-black md:w-1/2 w-full p-4 flex justify-center rounded-lg'>
            <input className='w-3/4 p-4 rounded-lg outline-none' placeholder='Search Here' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button className='bg-red-500  md:px-14 px-5 text-white font-bold py-4 ml-2 rounded-lg' onClick={handleSearch}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBox