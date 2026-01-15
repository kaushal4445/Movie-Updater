import { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
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
function Home () {
    const[movies, setmovies] = useState<MovieCardType[]>([])
    const[page, setPage] = useState<number>(1)
    const fetchMovies = async(page: number) => {
        try{
        const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=${page}` )
        // console.log(response.data.results)
        setmovies(response.data.results)
        }
        catch (err){

            console.log(" fetch error in homepage top rated movies")
        }
    }
    useEffect(() => {
        fetchMovies(page)
             
    },[page])

    const handlePageUpdate =() => {
     setPage(prev => prev+1)   
 
    }
    
    return (
        <div className="w-[90%] mx-auto mb-44">
            <HomeSlider />
            <Movielist movies = {movies} title="Top Rated Movies" />
            <div onClick={() => handlePageUpdate()}>
            <LoadMoreButton /> 
            </div>
        </div>
    );
}

export default Home;
