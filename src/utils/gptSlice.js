import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        toggleGpt: false,
    },
    reducers:{
        toggleGptComp:(state) =>{
            state.toggleGpt = !state.toggleGpt
        }
    }
})

export const {toggleGptComp} = gptSlice.actions;
export default gptSlice.reducer;