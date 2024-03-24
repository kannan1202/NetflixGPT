import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {

    const langKey = useSelector(store=>store?.config?.lang);

  return (
    <div className='pt-[12%] flex justify-center'>
        <form className='w-8/12 bg-black bg-opacity-85 grid grid-cols-12 rounded-lg'>
            <input type='text' className='p-4 m-4 rounded-lg col-span-9' placeholder={lang[langKey].GPTSearchBarPlaceholder}></input>
            <button className='m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar