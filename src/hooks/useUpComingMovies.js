import { useEffect } from "react";
import {   UPCOMING_MOVIES, options } from "../utils/constants"
import { useDispatch } from "react-redux";
import {   addUpComingMovie } from "../utils/moviesSlice";


const useUpComingMovies = () =>{
    const dispatch = useDispatch();
    const getUpComingMovies = async () =>{
        const data = await fetch(UPCOMING_MOVIES,options);
        const jsonData = await data.json();
        dispatch(addUpComingMovie(jsonData));
    }
    
    useEffect(()=>{
        getUpComingMovies();
        // eslint-disable-next-line
    },[])
}

export default useUpComingMovies;