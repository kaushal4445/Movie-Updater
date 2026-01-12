import React, { useEffect, useState } from "react";

import { baseApi } from "../../api/axiosInstance";
import Movielist from "../../components/Home/MovieList";
import LoadMoreButton from "../../components/Button/LoadMoreButton";


export interface MovieCardType{
  id:number
   poster_path: string
   release_date: string
   title: string
   vote_average: number
   original_language:  string
}
 export interface CateogryType{
    name: string
    path: string
}

export const cateogry: CateogryType[] = [
    { name:"Now Playing", path: "now_playing" },
    { name: "Popular", path: "popular" },
    { name: "Top Rated", path: "top_rated" },
    { name: "Upcoming", path: "upcoming" }
]

interface pageType{
    [key: string]: number
}

function Movies (){
    const[filter, setFilter] = useState(cateogry[0].name)

    const[nowplaying, setNowPlaying] = useState<MovieCardType[]>([])
        const[popular, setPopular] = useState<MovieCardType[]>([])
            const[topRated, setTopRated] = useState<MovieCardType[]>([])
                const[upcoming, setUpcoming] = useState<MovieCardType[]>([])
                const[pages, setPages] = useState<pageType>({"now_playing":1, "popular":1, "top_rated":1, "upcoming":1 }) 

    const toggleSelection =(item: string) => {
    setFilter(item)
    }

const fetchMovies= async(path: string, page : number) => {

    try{
        console.log(path)
        const response = await baseApi.get(`/3/movie/${path}?language=en-US&page=${page}`)
        console.log(response.data.results)
        switch(path){
            case "now_playing":
               setNowPlaying (prev => [...prev, ...response.data.results])
               break;
               case "popular":
                setPopular (prev => [...prev, ...response.data.results])
                break;
                case "top_rated":
                 setTopRated (prev => [...prev, ...response.data.results])
                    break;
                    case "upcoming":
                        setUpcoming ( prev => [...prev, ...response.data.results])
                       break;
                       default: 
                       break;

        }

    }catch(error){
        console.log("fetch error in movie page", error)
    }
    
}


  const handleLoadMore = () => {
 const currentCategory = cateogry.find(item => item.name == filter)
 if(currentCategory){
   setPages(prev => ({
    ...prev,[currentCategory.path]:prev[currentCategory.path] + 1
   }
   ))
   fetchMovies(currentCategory.path,pages[currentCategory.path] + 1)
 }
  }

 useEffect(() => {
   
 const current = cateogry.filter(item => item.name == filter)
 console.log(current)
    fetchMovies(current[0].path, 1)
 }, [filter])
 
    return (
        <div className="w-[90%] mx-auto mt-4">
            <h1 className="text-3xl font-bold text-yellow-500">Explore Movies</h1>
            <div className="flex mt-2">
            {
                cateogry.map((item , ind) => (
                     <div key = {ind} className="">
                        <button  onClick={() => toggleSelection(item.name)}
                        className="text-base font-semibold w-44 h-10 hover:bg-[#121212]">{item.name}</button>
                        <div className={`h-0.5  bg-blue-400 mx-auto ${filter == item.name ? "w-full" :"w-0"} duration-200`}></div>
                     </div>
                ))
            }
        </div>
        { filter == "Now Playing" &&
         <Movielist  movies={nowplaying}/>
        }
         { filter == "Popular" &&
         <Movielist  movies={popular}/>
        }
         { filter == "Top Rated" &&
         <Movielist  movies={topRated}/>
        }
         { filter == "Upcoming" &&
         <Movielist  movies={upcoming}/>
        }
        <div onClick={handleLoadMore}>
            <LoadMoreButton />
        </div>
        </div>
    )
}

export default Movies;