import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:'gpt',
    initialState:{
        showGPTSearch:false,
    },
    reducers:{
        // Used to Show and hide GPT Search
        toggleGPTSearchView:(state)=>{
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
})

export const {toggleGPTSearchView} = GPTSlice.actions;
export default GPTSlice.reducer;