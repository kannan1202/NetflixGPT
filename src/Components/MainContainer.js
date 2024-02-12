import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    const {title,overview,id} = mainMovie;

  return (
    <div>
        <VideoTitle overview={overview} title={title}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;