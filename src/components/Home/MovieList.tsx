
import MovieCard from './MovieCard'


export interface MovieCardType {
  id: number
   poster_path: string
   release_date: string
   title: string
   vote_average: number
   original_language:  string
}

interface MovieListProps{
  movies:MovieCardType[]
  title?: string
} 

function Movielist({movies,title } : MovieListProps) {
  return (
    <div className='mt-14'>
      {
        title && 
      
      <h1 className=' text-3xl font-bold text-yellow-500'>{title}</h1>
}
      <div className='row row-cols-6'>
         {
          movies.length > 0 && movies.map((data,ind) =>(
            <MovieCard key={ind} movieData={data}/>
            
          ))
         }
      </div>
    </div>
  )
}

export default Movielist;
