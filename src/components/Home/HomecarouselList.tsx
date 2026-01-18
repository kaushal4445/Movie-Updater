
import type { CarouselMovieType } from "./HomeSlider";
import CarouselMiniCarrd from "./CarouselMiniCarrd";

interface HomecarouselListProps{
    next: number[]
  carouselMovies: CarouselMovieType[]
}

function HomecarouselList({next, carouselMovies} : HomecarouselListProps){

   
    return(
        <div>
            <h1 className=" font-bold text-xl text-yellow-500">Up Next</h1>
            {
                next.map((item,ind) => (
               <CarouselMiniCarrd  carouselMovies={carouselMovies}item={movie} ind={ind}/>
                ))
            }
        </div>
    )
}

export default HomecarouselList;
