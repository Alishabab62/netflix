import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerMovie:null,
        popularMovie:null,
        topRatedMovie:null,
        upComingMovie:null,
        trendingMovie:null,
        allVideos:null
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerMovie: (state,action)=>{
            state.trailerMovie = action.payload;
        },
        addPopularMovie: (state,action)=>{
            state.popularMovie = action.payload
        },
        addTopRatedMovie: (state,action)=>{
            state.topRatedMovie = action.payload
        },
        addUpComingMovie: (state,action)=>{
            state.upComingMovie = action.payload
        },
        addTrendingMovie: (state,action)=>{
            state.trendingMovie = action.payload
        },
        addAllMoviesVideos: (state,action)=>{
            state.allVideos = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerMovie,addPopularMovie,addTopRatedMovie,addUpComingMovie,addTrendingMovie,addAllMoviesVideos} = moviesSlice.actions;
export default moviesSlice.reducer;