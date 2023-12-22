import { options } from "../utils/constants";


    export  const getMovies = async (q) =>{
        try {
            const url = "https://api.themoviedb.org/3/search/movie?query="+q+"&include_adult=false&language=en-US&page=1";
        const data = await fetch(url,options);
        const jsonData = await data.json();
        return jsonData;
        } catch (error) {
            console.log(error);
        }
    }
