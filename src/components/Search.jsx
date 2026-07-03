import React from 'react'

import './Search.css'


const Search = () => {
  return (
    <div className='input-wrapper'>
        <input type="text" placeholder='Search movies...' />
        <button>Search</button>
    </div>
  )
}

export default Search ;