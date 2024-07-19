import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import axios from 'axios';
const Movies = ({handleAddWatchlist, handleDeleteWatchlist, watchlist}) => {

  const[movies, setMovies] = useState([])
const [page, setPage] = useState(1)


const handlePrev = () =>{
  if(page ===1){
    setPage(1)
  } else{
    setPage(page-1)
  }
}


const handleNext = () =>{
 
    setPage(page+1)
  
}

const getMovies = async() => {



   try{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=97aaf6dc68dd4b6293a78b96420e243b&language=en-US&page=${page}`)
    console.log(res.data.results,'res')
    setMovies(res.data.results)
  }

   catch(err){
    console.error(err)
   }
}

useEffect(()=>{
    getMovies()
},[page])

  return (
    <>
    <div>Movies</div>
    <div className='flex flex-row flex-wrap justify-around gap-8'>
     {movies.map((movieObj) => {
      return  <MovieCard watchlist={watchlist} handleDeleteWatchlist={handleDeleteWatchlist} handleAddWatchlist={handleAddWatchlist} movieObj={movieObj} poster_path ={movieObj.poster_path} title={movieObj.title}/>})}
   
     </div>
     <Pagination handlePrev={handlePrev} handleNext={handleNext} page={page} />
    </>
  )
}


export default Movies;