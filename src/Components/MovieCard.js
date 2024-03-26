import React from 'react';
import {IMG_CDN_URL} from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-28 md:w-36 pr-4'>
      <img className='rounded-md' alt='Movie Card' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard