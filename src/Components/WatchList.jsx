import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import genreids from '../utils/genres';

const WatchList = ({watchlist, setWatchlist}) => {
  console.log(watchlist,'watch')

const[search, setSearch] = useState('')

const[genre, setGenre] = useState(['All Genres'])
const[currentGenre, setCurrentGenre] = useState('All Genres')

const handleSearch = (e)=>{
  setSearch(e.target.value)
}

const sortIncrease =()=>{
  let increasing = watchlist.sort((a,b)=>{
    return b.vote_average - a.vote_average
  })
  setWatchlist([...increasing])
}

const sortDecrease =()=>{
  let decreasing = watchlist.sort((a,b)=>{
    return a.vote_average - b.vote_average
  })
  setWatchlist([...decreasing])
}

let handleFilter = (genre) => {
  setCurrentGenre(genre);
};

useEffect(()=>{
  let genreName = watchlist.map((item)=>{
    return genreids[item.genre_ids[0]]
  });
  console.log(genreName,'ge')
  let temp = [...new Set(genreName)]
  setGenre(['All Genres', ...temp])
  console.log(genre,'genre')
},[watchlist])



useEffect(()=>{
let temp1 = watchlist.filter((movie)=>{
  if (currentGenre === "All Genres") {
    return true;
  } else {
    return genreids[movie.genre_ids[0]] === currentGenre;
  }
})
console.log(temp1,'temp1')
},[])


  return (
    <>
    <div className="flex justify-center flex-wrap m-4 gap-4">
      {genre.map((item)=>{
        return (
          <div onClick={()=>handleFilter(item)} className={
            currentGenre === item
              ? "bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-semibold cursor-pointer"
              :" flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl cursor-pointer font-semibold"
          }>
            {item}
          </div>
        )
      })}
     
    </div>
    <div className="input-boxes flex justify-center my-4">
      <input type="text"  onChange={handleSearch}   className="w-1/3 h-[3rem] bg-gray-200 outline-none px-4 text-xl font-semibold"
          placeholder="Search Movies" value={search}/>
    </div>
    <div className='border border-gray-200 m-5 rounded-lg overflow-hidden'>
    <table className='w-full text-gray-500 text-center'>
    <thead className="border-b-3 text-gray-800 bg-gray-200">
      <tr>
      <th className="text-left px-5 py-3">Name</th>
      <th></th>
      <th className="flex gap-3 justify-center">  
      <div  onClick={sortIncrease} className="p-2">
           <FontAwesomeIcon  icon={faArrowUp} />
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecrease} className="p-2">
                <FontAwesomeIcon  icon={faArrowDown} />
                </div></th>
      <th>Popularity</th>
      <th>Genre</th>
      <th></th>
      </tr>
      </thead>
      {watchlist.filter((movie) => {
              if (currentGenre === "All Genres") {
                return true;
              } else {
                return genreids[movie.genre_ids[0]] === currentGenre;
              }
            }).filter((movie)=>{
        return movie.original_title.toLowerCase().includes(search.toLocaleLowerCase())
      }).map((item)=>{
         return <tr className="border-b-2" >
         <td className="flex items-center px-6 py-4">
         <img
                        className="h-[6rem] w-auto"
                        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                        alt={item.original_title}
                      />
                      <div className="mx-10">{item.original_title}</div>
         </td>
         <td></td>
         <td>{item.vote_average}</td>
         <td>{item.popularity}</td>
         <td>{genreids[item.genre_ids[0]]}</td>
         <td>Delete</td>
         </tr>
      })}
     
    </table>
    </div>
    </>
  )
}

export default WatchList;

