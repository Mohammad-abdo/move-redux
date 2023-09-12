import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

 export const  getTrending= createAsyncThunk("movies/getTrending",async (mediaType)=>{
     let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=9fd4f82abd9873f00e717892f1f9ea97`)
     return data.results
})

// const initialState={trendingMovies:[],lading:false} 
let movieSlice = createSlice({
    name:'movies',
    initialState:{trendingMovies:[],lading:false} ,
    extraReducers:(builder)=>{
builder.addCase(getTrending.fulfilled,(state, action)=>{
    state.trendingMovies =action.payload
})
    }
});

 export const movieReducer=movieSlice.reducer