import { useState, ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import CarouselMiniCarrd from "../Home/CarouselMiniCarrd";

export interface CarouselMovieType {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_count: number;
}

function Navbar() {
  const[search, setSearch] = useState("")
  const [searchList, setSearchList] = useState<CarouselMovieType[]>([])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

const fetchSearch = async() => {
  try{
 const response = await baseApi.get(`/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`)
 console.log(response.data.results)
 setSearchList(response.data.results)
  }catch(error){
    console.log("fetch search error", error)
  }
}

  useEffect(() => {
   fetchSearch()
  }, [search])
  
  return (
    <nav className="bg-[#121212] py-4">
      <div className="flex justify-between items-center w-[80%] mx-auto">
        {/* Left side: Logo and Button */}
        <div className="flex items-center space-x-16">
          <Link to="/">
          <div className="text-yellow-500 leading-tight">
            <h1 className="text-[18px]">ALLABOUT</h1>
            <h1 className="text-[24px] font-semibold">MOVIES</h1>
          </div>
          </Link>
          <Link to= "/movies">
          <button className="text-[18px] text-yellow-500 hover:underline">
            EXPLORE
          </button>
          </Link>
        </div>

        {/* Right side: Search input */}
        <div className="">
          <input
            placeholder="search"
            className="w-[500px] h-10 bg-black text-[#c2c2c2] text-lg outline-none px-4 placeholder:text-[#646464] rounded-xl border border-[#333]"
            onChange={handleChange}
             type="text"
          />
          <div className="relative">
          <div className="absolute z-50 left-0 w-full bg-zinc-800 rounded-xl">
             <div className="py-3 pl-5">
            <div className=" flex flex-col gap-2 h-fit max-h-[380px] overflow-y-auto">
            {searchList.length> 0  && searchList.map((ind) => 
            <CarouselMiniCarrd key = {item.id} carouselMovies={searchList} ind={index} item={item} />
             )}
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
