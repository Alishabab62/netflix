import React from 'react'
import { useParams } from 'react-router-dom'
import useAllMoviesVideos from '../hooks/useAllMoviesVideos';
import { useSelector } from 'react-redux';
import useMovieDetails from '../hooks/useMovieDetail';

const ViewPage = () => {
    const {id} = useParams();
    useAllMoviesVideos(id);
    const movieDetail = useMovieDetails(id);
    const data = useSelector(store => store.movies);
    if(!movieDetail) return;
    console.log(movieDetail)
    const {original_title,release_date,overview,revenue,tagline,vote_average,vote_count,genres,budget} = movieDetail;

    if(!data?.allVideos) return
    const mainMovie = data?.allVideos.results[0];
  return (
    <div>
        <iframe
          className='w-full md:h-[550px] h-[250px]'
          src={"https://www.youtube.com/embed/" + mainMovie?.key +"?controls = 0 &autoplay=1&mute=1&showinfo=0&allow=autoplay"}
          title="YouTube video player"
        ></iframe>
        <div className='p-2'>
            <h1 className='font-bold text-2xl'>{original_title}</h1>
            <h1><span className='text-xl font-bold'>Description : </span><span className='text-base'>{overview}</span></h1>
            <div className='flex items-center'>
                <h1 className='text-xl font-bold mr-1'>Genres: </h1>
                <div className='flex items-center mt-1'>
                {  
                    genres.map((g)=><h1 key={g.id} className='text-base mr-1'>{g.name},</h1>)
                }
                </div>
            </div>
            <h1><span className='text-xl font-bold'>Release Date: </span><span className='text-base'>{release_date}</span></h1>
            <h1><span className='text-xl font-bold'>Total Revenue: </span><span className='text-base'>₹{revenue}</span></h1>
            <h1><span className='text-xl font-bold'>Tagline: </span><span className='text-base'>{tagline}</span></h1>
            <h1><span className='text-xl font-bold'>Vote Average: </span><span className='text-base'>{vote_average}</span></h1>
            <h1><span className='text-xl font-bold'>Vote Count: </span><span className='text-base'>{vote_count}</span></h1>
            <h1><span className='text-xl font-bold'>Budget: </span><span className='text-base'>₹{budget}</span></h1>
        </div>
    </div>
  )
}

export default ViewPage