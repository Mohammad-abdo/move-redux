import { createSlice } from "@reduxjs/toolkit";
import { getMovieTrailer } from "./getMovieTrailer";

const initialState = {
  trailerUrl: null,
  loading: false,
  error: null,
};

const movieSliceT = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieTrailer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieTrailer.fulfilled, (state, action) => {
        state.loading = false;
        state.trailerUrl = action.payload;
      })
      .addCase(getMovieTrailer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSliceT.reducer;
