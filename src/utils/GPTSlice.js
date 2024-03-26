import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:'gpt',
    initialState:{
        showGPTSearch:false,
        gptMovieNames:null,
        gptMovieResults:null,
    },
    reducers:{
        // Used to Show and hide GPT Search
        toggleGPTSearchView:(state)=>{
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMovieResults:(state,action)=>{
            const {gptMovieNames,gptMovieResults} = action.payload;
            state.gptMovieNames = gptMovieNames
            state.gptMovieResults = gptMovieResults;
        }
    }
})

export const {toggleGPTSearchView,addGPTMovieResults} = GPTSlice.actions;
export default GPTSlice.reducer;