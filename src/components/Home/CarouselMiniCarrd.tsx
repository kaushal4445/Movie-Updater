import { useState } from "react";
import { Link } from 'react-router-dom'
import { imagepath } from '../../utils/constant'
import { LuThumbsUp } from 'react-icons/lu'

export interface CarouselMovieType {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
}

interface  CarouselMiniCarrdProps{
    carouselMovies: CarouselMovieType[]
     item: CarouselMovieType; 
  
    ind: number
}


 
function CarouselMiniCarrd({carouselMovies, item, ind}:  CarouselMiniCarrdProps) {
       const[hover, setHover] = useState<number | null>(null)
  return (
     <Link to={`/details/${carouselMovies[item].id}`}>
                    <div  key = {ind} className="flex  gap-2"
                    onMouseEnter={() => setHover(ind)}
                    onMouseLeave={() => setHover(null)}
                    >
                 
                 <img src={imagepath + carouselMovies[item]?.poster_path}  className =" w-[100px]"alt="" />
                 <div className="flex flex-col justify-between py-2">
                 <div className="leading-5">
                    <h1 className={`${hover===ind ? "underline":"" }`}>{carouselMovies[item]?.title}</h1>
                    <h1 className="text-md  text-zinc-300 line-clamp-3">{carouselMovies[item]?.overview}</h1>
                    </div>
                    <div className="flex gap-1 text-center">  <LuThumbsUp />
                        <h2>{carouselMovies[item]?.vote_count}</h2>
                        </div>
                        </div>
                        </div>
                 </Link>
  )
}

export default CarouselMiniCarrd
