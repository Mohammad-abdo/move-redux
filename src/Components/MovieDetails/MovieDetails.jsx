import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieTrailer } from "../../store/getMovieTrailer";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
  

const MovieDetails = ({ movieId }) => {
    const {id}=useParams();
    const dispatch = useDispatch();
    const trailerUrl = useSelector((state) => state.movies.trailerUrl);
    console.log(trailerUrl);
    const loading = useSelector((state) => state.movies.loading);
    const error = useSelector((state) => state.movies.error);
  
    useEffect(() => {
      dispatch(getMovieTrailer(id));
    }, [dispatch, movieId]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (trailerUrl) {
      const videoId = trailerUrl.split("v=")[1];
  
      const opts = {
        height: "390",
        width: "640",
        playerVars: {
        //   https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
      return (
        <div>
          <h2>Movie Details</h2>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      );
    }
  
    return <div>
        No trailer found for this movie.</div>;
  };
  
  export default MovieDetails;
