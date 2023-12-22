import { useEffect } from "react";
import {  TOP_RATED_MOVIES, options } from "../utils/constants"
import { useDispatch } from "react-redux";
import {  addTopRatedMovie } from "../utils/moviesSlice";


const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const getTopRatedMovies = async () =>{
        try {
            const data = await fetch(TOP_RATED_MOVIES,options);
            const jsonData = await data.json();
            dispatch(addTopRatedMovie(jsonData));
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getTopRatedMovies();
        // eslint-disable-next-line
    },[])
}

export default useTopRatedMovies;