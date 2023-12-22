import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import GptShimmer from './GptShimmer';

const GptSearchResult = () => {
  const {searchQuery,searchResults} = useSelector(store => store.gpt);
  if(!searchQuery  || !searchResults) return <GptShimmer/>
  // console.log(searchQuery, searchResults)
  
  return (
    <div >
        {
          searchQuery.map((search,index)=> <MovieList key={index} color="black" title={search} movie={searchResults[index]?.results}/>)
        }
    </div>
  )
}

export default GptSearchResult