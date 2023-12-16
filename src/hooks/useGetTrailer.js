import { useEffect, useState } from "react";
import { options } from "../utils/constants";


const useGetTrailer = (id) =>{
    const [key,setKey] = useState(null)
    const getTrailer = async (id) =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",options);
        const jsonData = await data.json();
        const filteredResults = jsonData.results.filter((m) => m.type === "Trailer");
        const trailer = filteredResults.length ? filteredResults[0] : jsonData.results[0];
        setKey(trailer.key);
    }
    useEffect(()=>{
        getTrailer(id);
        // eslint-disable-next-line
    },[id]);
    
    return key;
}

export default useGetTrailer;