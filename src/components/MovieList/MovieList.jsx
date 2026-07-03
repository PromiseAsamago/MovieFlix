import React from 'react'

import './MovieList.css'
import MovieCard from './MovieCard'
const MovieList = () => {
  return (
    <section className="movieList">
        <header className="movieListHeader">
            <h3 className="movieListHeading">POPULAR MOVIES</h3>
        </header>
        <MovieCard/>
    </section>
  )
}

export default MovieList