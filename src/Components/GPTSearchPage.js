import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_URL } from '../utils/Constants';

const GPTSearchPage = () => {
  return (
    <div>
      <div className='fixed -z-10'>
        <img src={BG_URL}
        alt="NetflixGPT-Bg-Img"/>
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearchPage;