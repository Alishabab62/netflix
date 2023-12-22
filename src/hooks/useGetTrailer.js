import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerMovie } from "../utils/moviesSlice";


const useGetTrailer = (id) =>{

    const dispatch = useDispatch()
    const getTrailer = async (id) =>{
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",options);
        const jsonData = await data.json();
        const filteredResults = jsonData?.results?.filter((m) => m.type === "Trailer");
        const trailer = filteredResults?.length ? filteredResults[0] : jsonData?.results[0];
        dispatch(addTrailerMovie(trailer));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getTrailer(id);
        // eslint-disable-next-line
    },[id]);
    
}

export default useGetTrailer;