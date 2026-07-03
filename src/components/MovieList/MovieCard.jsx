import React from 'react'

import './MovieCard.css'

const MovieCard = ({movie}) => {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className='movieCard'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster" className='moviePoster' />
        <div className="movieDetails">
            <h4 className="movieDetailsHeading">{movie.origicdnal_title}</h4>
            <div className="movieDateRate">
                <div>{movie.release_date}</div>
                <div className='ratingBox'>
                    <div className="ratingIcon"></div>
                    <div className="rating">{movie.vote_average}</div>
                </div>
            </div>
        </div>
    </a>
  )
}

export default MovieCard