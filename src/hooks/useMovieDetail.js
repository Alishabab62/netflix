import { useEffect, useState } from "react"
import { options } from "../utils/constants";


const useMovieDetails = (id) =>{
    const [movieId] = useState(id);
    const [data,setData] = useState(null);
    const getMovieDetail = async (id) => {
        const url = "https://api.themoviedb.org/3/movie/"+movieId;
        const data = await fetch(url,options);
        const jsonData = await data.json();
        setData(jsonData)
        // console.log(jsonData);
    }
    
    useEffect(()=>{
        getMovieDetail()
    },[])
    return data;
}
export default useMovieDetails;