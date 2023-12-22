import { useEffect, useState } from "react"
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAllMoviesVideos } from "../utils/moviesSlice";


const useAllMoviesVideos = (id) =>{

    const [movieId] = useState(id);
    const dispatch = useDispatch();
    const getAllMoviesVideos = async (id) =>{
        try {
            const url = "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US";
        const data = await fetch(url,options);
        const jsonData = await data.json();
        dispatch(addAllMoviesVideos(jsonData))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllMoviesVideos();
        // eslint-disable-next-line
    },[id])

}

export default useAllMoviesVideos;