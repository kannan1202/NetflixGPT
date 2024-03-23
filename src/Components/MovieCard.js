import React from 'react';
import {IMG_CDN_URL} from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 pr-4'>
      <img className='rounded-md' alt='Movie Card' src={IMG_CDN_URL+posterPath} />
    </div>
  )
}

export default MovieCard