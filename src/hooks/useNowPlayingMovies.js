import { useDispatch } from "react-redux";
import { NOW_PLAYING_URL, options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch(NOW_PLAYING_URL,options);
            const jsonData = await data.json();
            dispatch(addNowPlayingMovies(jsonData))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getNowPlayingMovies();
        // eslint-disable-next-line
    },[])
}

export default useNowPlayingMovies;