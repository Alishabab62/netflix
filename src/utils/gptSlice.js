import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        toggleGpt: false,
        searchResults: null,
        searchQuery: null,
    },
    reducers:{
        toggleGptComp:(state) =>{
            state.toggleGpt = !state.toggleGpt
        },
        addSearchResult: (state,action) =>{
            const {query,result} = action.payload
            state.searchResults = result;
            state.searchQuery = query;
        }
    }
})

export const {toggleGptComp,addSearchResult} = gptSlice.actions;
export default gptSlice.reducer;