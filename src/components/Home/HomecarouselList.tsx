
// import type { CarouselMovieType } from "./HomeSlider";
// import CarouselMiniCarrd from "./CarouselMiniCarrd";

// interface HomecarouselListProps{
//     next: number[]
//   carouselMovies: CarouselMovieType[]
// }

// function HomecarouselList({next, carouselMovies} : HomecarouselListProps){

   
//     return(
//         <div>
//             <h1 className=" font-bold text-xl text-yellow-500">Up Next</h1>
//             {
//                 next.map((item,ind) => (
//             const movie = carouselMovies[index]; // ✅ FIX
//         if (!movie) return null;

//         return (
//           <CarouselMiniCarrd
//             key={movie.id}
//             item={movie}     // ✅ now defined
//             ind={ind}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default HomecarouselList;





import type { CarouselMovieType } from "./HomeSlider";
import CarouselMiniCarrd from "./CarouselMiniCarrd";

interface HomecarouselListProps {
  next: number[];
  carouselMovies: CarouselMovieType[];
}

function HomecarouselList({ next, carouselMovies }: HomecarouselListProps) {
  return (
    <div>
      <h1 className="font-bold text-xl text-yellow-500">Up Next</h1>

      {next.map((movieIndex, ind) => {
        const movie = carouselMovies[movieIndex];

        if (!movie) return null;

        return (
          <CarouselMiniCarrd
            key={movie.id}
            item={movie}
            ind={ind}
          />
        );
      })}
    </div>
  );
}

export default HomecarouselList;
