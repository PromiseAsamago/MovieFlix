import React, { useEffect, useState } from 'react'


import './App.css'
import MovieList from './components/MovieList/MovieList'

 const App = () => {
  
  return (
    <div className='app'>
      <div className="mainHeader">
         <div className='titleBox'>
           <div className="titleIcon"></div>
           <div className='title'>
             <h1>MovieFlix</h1>
           </div>
         </div>

          {/* More description */}
          <div className='headerDesc'>Discover amazing films</div>
      </div>

     

      {/* Main Content */}
      <main>
        <MovieList/>
      </main>
    </div>
  )
}
export default App