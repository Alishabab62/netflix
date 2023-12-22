import { useEffect } from "react";
import { POPULAR_MOVIES, options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/moviesSlice";


const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const getPopularMovies = async () =>{
        try {
            const data = await fetch(POPULAR_MOVIES,options);
            const jsonData = await data.json();
            dispatch(addPopularMovie(jsonData));
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getPopularMovies();
        // eslint-disable-next-line
    },[])
}

export default usePopularMovies;