// import { useState } from "react";
// import { Link } from 'react-router-dom'
// import { imagepath } from '../../utils/constant'
// import { LuThumbsUp } from 'react-icons/lu'



// export interface CarouselMovieType {
//   id: number;
//   backdrop_path: string;
//   poster_path: string;
//   title: string;
//   overview: string;
//   vote_count: number;
// }

// interface  CarouselMiniCarrdProps{
//     carouselMovies: CarouselMovieType
//      item: CarouselMovieType; 
  
//     ind: number
// }


 
// function CarouselMiniCarrd({ item, ind}:  CarouselMiniCarrdProps) {
//        const[hover, setHover] = useState<number | null>(null)
//   return (
//      <Link to={`/details/${[item].id}`}>
//                     <div  key = {ind} className="flex  gap-2"
//                     onMouseEnter={() => setHover(ind)}
//                     onMouseLeave={() => setHover(null)}
//                     >
                 
//                  <img src={imagepath + [item]?.poster_path}  className =" w-[100px]"alt="" />
//                  <div className="flex flex-col justify-between py-2">
//                  <div className="leading-5">
//                     <h1 className={`${hover===ind ? "underline":"" }`}>{[item].title}</h1>
//                     <h1 className="text-md  text-zinc-300 line-clamp-3">{[item].overview}</h1>
//                     </div>
//                     <div className="flex gap-1 text-center">  <LuThumbsUp />
//                         <h2>{[item]?.vote_count}</h2>
//                         </div>
//                         </div>
//                         </div>
//                  </Link>
//   )
// }

// export default CarouselMiniCarrd




import { Link } from "react-router-dom";
import type { CarouselMovieType } from "../Navbar"; // or correct path

interface CarouselMiniCarrdProps {
  item: CarouselMovieType;
  ind: number;
}

function CarouselMiniCarrd({ item }: CarouselMiniCarrdProps) {
  return (
    <Link to={`/movie/${item.id}`}>
      <div className="flex gap-4 p-2 hover:bg-zinc-700 rounded-lg cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt={item.title}
          className="w-16 rounded"
        />
        <div>
          <h3 className="text-white font-semibold">{item.title}</h3>
          <p className="text-sm text-zinc-400 line-clamp-2">
            {item.overview}
          </p>
          <p className="text-xs text-yellow-400">
            Votes: {item.vote_count}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CarouselMiniCarrd;

