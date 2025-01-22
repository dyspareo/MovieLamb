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
  const [movies, setMovies]= useState([]);      // movies is state name , setmovies is for setstate
  const [searchTerm, setSearchTerm] =useState([]); // search term as a another state mapping is done between these two state, and also setsearchterm is for initial value of that state later may it change
const searchMovies =async(title)=>{                      //search movie function is happening using this function  { this is eentirely connected to API, with the help of that we diid the work }
const response =await fetch(`${API_URL}&s=${title}`)
const data =await response.json();

setMovies(data.Search)  // state will set as the data we searched.

}
  useEffect(()=>{
searchMovies('first');     //first default search term while openig the app.
  },[])

  return (
    <div>
    <div className='app'>
       <h1>MovieLand</h1>                       {/*  heading*/}
      <div className='search'>
        <input 
        placeholder='Search for movies'              
        value={searchTerm}
        onChange={(e)=>{
          setSearchTerm(e.target.value)                  /* actually search term is empty and here we took search term from what we inputed and use it for mapping pupose*/
        }}
        />
        <img 
        src='https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-1024.png'          /* search button */
        alt='search'
        onClick={()=>searchMovies(searchTerm)}  // while clicking this searchMovies function will run with searchTerm
        />
      </div>
      {movies?.length > 0 ? (                                     
  <div className='container'>
    {movies.map((movie) => (                                            //if the search term is not empty or null mapping happens
      <MovieCard key={movie.imdbID} movie={movie} />                    // after mappings happened display may start to work by using Moviecard Component we made
    ))}
  </div>
) : (
  <div className='empty'>                                               {/*else if the searchTerm is null the "No Movies Found" will display*/}
    <h2>No Movies Found</h2>
  </div>
)}

</div></div>
  )
}

export default App;                                                    // useful for exporting this to another files