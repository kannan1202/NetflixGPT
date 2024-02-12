import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold text-white'>{title}</h1>
        <p className='py-4 text-base w-1/3 text-white'>{overview}</p>
        <div className='mb-6'>
            <button className='px-8 py-2 rounded-md text-lg font-semibold bg-white hover:bg-opacity-80'>{'▶︎ Play'}</button>
            <button className='px-8 py-2 mx-2 rounded-md text-lg font-semibold text-white bg-zinc-400 bg-opacity-40 hover:bg-opacity-20'>{'More Info'}</button>
        </div>
    </div>
  )
}

export default VideoTitle;