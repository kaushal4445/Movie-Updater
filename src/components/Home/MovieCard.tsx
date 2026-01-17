import { useState, useEffect } from "react";

import { imagepath } from '../../utils/constant'
import { Link } from 'react-router-dom'

interface MovieCardProps{
    movieData: MovieCardType
}
export interface MovieCardType {
  id: number
   poster_path: string
   release_date: string
   title: string
   vote_average: number
   original_language:  string
}


function MovieCard({movieData} : MovieCardProps) {
    const[hover, setHover] = useState<number | null>(null)

    useEffect(() => {
      
    console.log("hover item",hover)
    }, [hover])
    

  return (
    <Link to={`/details/${movieData.id}`}>
    <div className='col'
    onMouseEnter={()=> setHover(movieData.id)}
    onMouseLeave={()=> setHover(null)}
    >
           
                    <div className={`my-3 border-2 border-zinc-800 rounded-lg overflow-hidden ${movieData.id === hover ? "scale-[102%]" : ""} duration-200`}>

                  <div className="relative overflow-hidden">
                  <img src={imagepath + movieData.poster_path}  className = "aspect-[3/4]" alt='' />
                    <div className="absolute -bottom-6 w-full h-28 _carcouselGradient"></div>
    
                </div>
                <div className="bg-[#222] p-2">
                  <h1 className={`text-[17px] font-semibold line-clamp-1 ${movieData.id === hover ? "underline" : ""}`}>{movieData.title}</h1>
                  <div className=' text -[15px] text-zinc-300 mt-2'>
                  {/* below upstring id=s used to decrease number of rating  */}
                  <h1 className=' '>Rating : {String(movieData.vote_average).substring(0,3)} </h1>
                  <h1>Language :{movieData.original_language} </h1>
                  <h1>Release Date  : {movieData.release_date}</h1>
                  </div>
                </div>
                </div>
                </div>
                </Link>
  )
}

export default MovieCard
