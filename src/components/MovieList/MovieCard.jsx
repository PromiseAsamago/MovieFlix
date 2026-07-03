import React from 'react'

import './MovieCard.css'

const MovieCard = () => {
  return (
    <a href="" className='movieCard'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5X8poKJ9ocso3GrsXrbwqpvft4L8nRqDzLF4ptEXChw&s=10" alt="movie poster" className='moviePoster' />
        <div className="movieDetails">
            <h4 className="movieDetailsHeading">Movie Name</h4>
            <div className="movieDateRate">
                <div>2025</div>
                <div className='ratingBox'>
                    <div className="ratingIcon"></div>
                    <div className="rating">7.0</div>
                </div>
            </div>
        </div>
    </a>
  )
}

export default MovieCard