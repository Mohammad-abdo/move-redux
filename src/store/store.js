
  import { configureStore } from '@reduxjs/toolkit'
import { movieReducer } from './movieSlice';
import movieSliceT from './movieSliceT';
import languageReducer from "./language";

const store =configureStore({
    reducer:{
   movies:movieReducer,
   triler :movieSliceT,
   language:languageReducer,


    }
    
})


export default store;
