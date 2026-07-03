import React from 'react'

import './App.css'
import Search from './components/Search'
import MovieList from './components/MovieCard.css/MovieList'

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

      {/* Search Bar Component */}
      <Search/>

      {/* Main Content */}
      <main>
        <MovieList/>
      </main>
    </div>
  )
}
export default App