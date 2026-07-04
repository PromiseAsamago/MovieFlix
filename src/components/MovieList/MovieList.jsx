import React, { useEffect, useState } from 'react'

import { searchMovies, getPopularMovies } from '../../service/api'
import '../Search.css'
import './MovieList.css'
import MovieCard from './MovieCard'


const MovieList = () => {
 
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true)

  useEffect (()=> {
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch (err) {
        console.log(err)
        setError("Failed to load movies...")
      }
      finally {
        setloading(false)
      }
    }
    loadPopularMovies()
  }, []);

  const handleSearch = async (e)=>{
    e.preventDefault()
    if (!searchQuery.trim())return
    if (loading)return

    setloading(true)
    try{
        const searchResults = await searchMovies(searchQuery)
         setMovies(searchResults)
         setError(null)
         
    } catch(err) {
      console.log(err)
      setError("Failed to search movies...")

    } finally{
      setloading(false)
    }
   
  };



  return (
    <section className="movieList">
        <div className=''>
          <form onSubmit={handleSearch} className='search-form' id='input-wrapper'>
              <input type="text" placeholder='Search movies...' className='search-input' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />
              <button type='submit' className='search-button'>Search</button>
          </form>
       </div>

        <header className="movieListHeader">
            <h3 className="movieListHeading">POPULAR MOVIES</h3>
        </header>
        
       
        {error? 
          (<div className='error-message'>{error}</div>

          ): 
             loading?
             (<div className='loading'>Loading...</div>

             ):
              (
          <div className="movieCards">
          {
            movies.map(
              (movie) =>(<MovieCard  movie={movie} key={movie.id} />


              )
             
            )
          }
        </div>
        )

        }


       
        
        
   
    </section>
  )
}

export default MovieList