import { useEffect } from "react";
import { POPULAR_MOVIES, options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/moviesSlice";


const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const getPopularMovies = async () =>{
        const data = await fetch(POPULAR_MOVIES,options);
        const jsonData = await data.json();
        dispatch(addPopularMovie(jsonData));
    }
    
    useEffect(()=>{
        getPopularMovies();
        // eslint-disable-next-line
    },[])
}

export default usePopularMovies;