

const MovieCard = ({poster_path,title,handleDeleteWatchlist, handleAddWatchlist, movieObj, watchlist}) =>{
    
    const doesitcontain =(movieObj) =>{
        for(let i=0; i<watchlist.length;i++){
            if(watchlist[i].id == movieObj.id) {
                return true;
              }
        } 
        return false
    }
    
    return(
        <div className="h-[50vh] w-[200px] flex flex-col justify-between items-end bg-center bg-cover mx-3 my-3 rounded-xl hover:cursor-pointer hover:scale-110 duration-300" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original//${poster_path})`}}>
         {doesitcontain(movieObj) ? (  
          <div
          onClick={() => handleDeleteWatchlist(movieObj)}
          className="m-4 p-1 flex justify-center h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>) :
          (<div onClick={()=>handleAddWatchlist(movieObj)}
          className="m-4 p-1 flex justify-center h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>)}
           <div className="text-white rounded-xl text-xl w-full p-2 text-center bg-gray-900/60">{title}</div>
        </div>
    )
}

export default MovieCard