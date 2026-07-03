import React, { useEffect, useState } from 'react'

import './MovieList.css'
import MovieCard from './MovieCard'
const MovieList = () => {
  const [movies, setmovies] = useState([]);
  useEffect (() => {
    fetchMovies();
  }, []);
  const fetchMovies = async() => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=094dfeaf81b265f0da0a6762aeff44fd"
    );
    const data = await response.json();
    setmovies(data.results);
  }
  return (
    <section className="movieList">
        <header className="movieListHeader">
            <h3 className="movieListHeading">POPULAR MOVIES</h3>
        </header>
        <div className="movieCards">
          {
            movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)
          }
        </div>
    </section>
  )
}

export default MovieList