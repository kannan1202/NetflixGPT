import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_URL } from '../utils/Constants';

const GPTSearchPage = () => {
  return (
    <>
    <div className='fixed -z-10'>
        <img
        className='h-screen object-cover md:h-auto'
        src={BG_URL}
        alt="NetflixGPT-Bg-Img"/>
      </div>
      <div>
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
    </>
    
  )
}

export default GPTSearchPage;