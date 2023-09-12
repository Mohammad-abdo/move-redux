import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

export const getMovieTrailer = createAsyncThunk(
  "movies/getMovieTrailer",
  async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        {
          params: {
            api_key: "9fd4f82abd9873f00e717892f1f9ea97",
          },
        }
      );

      const results = response.data.results;

      if (results.length > 0) {
        const trailerKey = results[0].key;
        const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
        return trailerUrl;
      } else {
        return null; // No trailer found for this movie
      }
    } catch (error) {
      throw error;
    }
  }
)

