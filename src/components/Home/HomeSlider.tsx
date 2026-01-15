import  { useEffect, useState } from "react";

import { imagepath } from "../../utils/constant";
import { baseApi } from "../../api/axiosInstance";
import HomeCarousel from "./HomeCarousel";
import HomecarouselList from "./HomecarouselList";


export interface CarouselMovieType {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
}
function HomeSlider() {
  const [carouselMovies, setCarouselMovies] = useState<CarouselMovieType[]>([]);
  const [selected, setSelected] = useState(0)
  const[next, setNext] = useState<number[]>([])
   
useEffect(() => {
   if(carouselMovies.length){
    const ind1 =(selected + 1) % carouselMovies.length
    const ind2 =(selected + 2) % carouselMovies.length
    const ind3 =(selected + 3) % carouselMovies.length
    setNext([ind1, ind2, ind3]);
     }
},[carouselMovies, selected])

useEffect(() => {
  const myCarousel = document.getElementById("carouselExample")

  const handleSlide=(event:Event) => {
    const customEvent = event as any 
    // console.log(event.from ,"---" ,event.to)
    setSelected(customEvent.to)
  }

  if(myCarousel){
    myCarousel.addEventListener('slid.bs.carousel',handleSlide)

    return()=>{
      myCarousel.removeEventListener('slid.bs.carousel',handleSlide)
    }
  }
} )

  const fetchUpcoming = async () => {
    try {
      const response = await baseApi.get("/3/movie/upcoming?language=en-US&page=1");
      setCarouselMovies(response.data.results);
    } catch (err) {
      console.log("fetch upcoming movies error", err);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  // if (carouselMovies.length === 0) {
  //   return <p className="text-white text-center mt-4">Loading...</p>;
  // }

  return (
    <div className="row">
    <div className="relative col-8">
      <div id="carouselExample" className="carousel slide">
       <HomeCarousel  carouselMovies={carouselMovies} />
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div className="col-4 ">
      <HomecarouselList next = {next}  carouselMovies={carouselMovies} />
    </div>
    </div>
  );
}

export default HomeSlider;

