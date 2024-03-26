import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const GPTMovieSuggestions = () => {

  const {gptMovieNames,gptMovieResults} = useSelector(store=>store?.gpt);
  
  if(!gptMovieNames ) return null;

  return (
    <div className='p-4 m-4 bg-black bg-opacity-85 text-white rounded-lg'>
    {gptMovieNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={gptMovieResults[index]}/>)}
    </div>
  )
}

export default GPTMovieSuggestions