import { useState, useEffect } from "react";

import { baseApi } from '../../api/axiosInstance'
import Movielist from '../Home/MovieList'
import LoadMoreButton from '../Button/LoadMoreButton'


export interface MovieCardType {
  id: number
   poster_path: string
   release_date: string
   title: string
   vote_average: number
   original_language:  string
}

function SimilarMovies({movieId}: {movieId: string}) {
 const[movies, setMovies] = useState<MovieCardType[]>([])
 const[page, setPage] = useState(0)
    const fetchSimilarMovies = async(page: number) => {
        try{
          const response = await baseApi.get(`/3/movie/${movieId}/similar?language=en-US&page=${page}`)
         setMovies(prev => [...prev,...response.data.results])
        }catch(error){
            console.log("Similar movies err", error)
        }

    }
const handleLoadMore = () => {
     fetchSimilarMovies(page+1)
     // setPage(prev => prev + 1)

}

    useEffect(() => {
     fetchSimilarMovies(1)
     setPage (prev => prev + 1)
    }, [movieId])
       


  return (
    <div>
        <Movielist movies={movies} title='Similar Movies'/>
        <div onClick={handleLoadMore}>
            <LoadMoreButton />
        </div>
    </div>
  )
}

export default SimilarMovies
