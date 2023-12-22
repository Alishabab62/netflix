import { useEffect, useState } from "react"
import { options } from "../utils/constants";


const useMovieDetails = (id) =>{
    const [movieId] = useState(id);
    const [data,setData] = useState(null);
    const getMovieDetail = async (id) => {
        try {
            const url = "https://api.themoviedb.org/3/movie/"+movieId;
            const data = await fetch(url,options);
            const jsonData = await data.json();
            setData(jsonData)
        } catch (error) {
            console.log(error)
        }
        
    }
    
    useEffect(()=>{
        getMovieDetail();
        // eslint-disable-next-line
    },[])
    return data;
}
export default useMovieDetails;