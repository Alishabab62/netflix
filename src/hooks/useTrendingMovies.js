import { useEffect } from "react";
import {   TRENDING_MOVIES, options } from "../utils/constants"
import { useDispatch } from "react-redux";
import {   addTrendingMovie } from "../utils/moviesSlice";


const useTrendingMovies = () =>{
    const dispatch = useDispatch();
    const getTrendingMovies = async () =>{
        try {
            const data = await fetch(TRENDING_MOVIES,options);
            const jsonData = await data.json();
            dispatch(addTrendingMovie(jsonData));
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(()=>{
        getTrendingMovies();
        // eslint-disable-next-line
    },[])
}

export default useTrendingMovies;