import React from 'react'
//moviecard is component used for reusabbility and flexability needs
const MovieCard = ({movie}) => {
  return (                                //there is an array containing all movie details and these movies details are in form of array with the help props object destructuring we make it into movie
    <div className='movie'>
  <div>
    <p>{movie.Year}</p>                        {/* with the help of  POD we acess the object keys to return the values*/}
  </div>
  <div>
    <img src={movie.Poster != 'N/A ' ? movie.Poster :"https://via.placeholder.com/400 "} alt={movie.Title}/>
  </div>
  <div>
    <span>{movie.Type}</span>
    <h3>{movie.Title}</h3>
  </div>
</div>
  )
}

export default MovieCard