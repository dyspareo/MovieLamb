import React, { useState } from 'react'
import {useEffect} from 'react'
import './App.css';
import MovieCard from './MovieCard';
const API_URL ='http://www.omdbapi.com?apikey=da75c5d7';
const movie1=
  {
    "Title": "Spider-Man: No Way Home",
    "Year": "2021",
    "imdbID": "tt10872600",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg"
}


const App = () => {
  const [movies, setMovies]= useState([]);
  const [searchTerm, setSearchTerm] =useState([]);
const searchMovies =async(title)=>{
const response =await fetch(`${API_URL}&s=${title}`)
const data =await response.json();

setMovies(data.Search)

}
  useEffect(()=>{
searchMovies('spider man');
  },[])

  return (
    <div>
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e)=>{
          setSearchTerm(e.target.value)
        }}
        />
        <img 
        src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-1024.png'
        alt='search'
        onClick={()=>searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
  <div className='container'>
    {movies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ))}
  </div>
) : (
  <div className='empty'>
    <h2>No Movies Found</h2>
  </div>
)}

</div></div>
  )
}

export default App;