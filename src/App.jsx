import Navbar from './Components/Navbar'
import  Movies from './Components/Movies'
import  WatchList  from './Components/WatchList'
import Banner from './Components/Banner'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
function App() {
  
const[watchlist, setWatchlist] = useState([])

const handleAddWatchlist = (movieobj) => {
  let newWatchlist = [...watchlist, movieobj]
  setWatchlist(newWatchlist)
  console.log(newWatchlist)
  localStorage.setItem('moviesapp',JSON.stringify(newWatchlist))
}

const handleDeleteWatchlist = (movieobj) =>{
  const fileteredWatchlist = watchlist.filter((movie) => movie.id != movieobj.id)
  setWatchlist(fileteredWatchlist)
  console.log(fileteredWatchlist)
}

useEffect(()=>{
  const norefreshwatchlist = localStorage.getItem('moviesapp')
  if (norefreshwatchlist) {
    setWatchlist(JSON.parse(norefreshwatchlist));
  }
},[])

  return (
    <>
    <BrowserRouter>
      <Navbar/>
     
      <Routes>
      <Route path='/' element={<><Banner/><Movies watchlist={watchlist} handleDeleteWatchlist={handleDeleteWatchlist} handleAddWatchlist={handleAddWatchlist}/></>}></Route>
      <Route path='/Watch' element={<WatchList watchlist={watchlist} setWatchlist={setWatchlist}/>}></Route>
     
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
