import {useEffect, useState} from 'react'
import { baseApi } from '../../api/axiosInstance'
import YouTube from 'react-youtube'

 export interface TrailerType {
  key: string;
  name: string;
  type: string;
}

interface TrailerProps {
  movieId: string;
}

function Trailer({movieId}:{movieId: string}) {
    const [trailer, setTrailers] = useState<TrailerType[]>([])
    const fetchTrailers = async() => {
        try{
          const response = await baseApi.get(`/3/movie/${movieId}/videos?language=en-US`)
          console.log(response.data.results)
          const trailerObj = response.data.results.filter((data: {type: string ,name: string}) => data.type == "Trailer")
          setTrailers(trailerObj)
        }catch (error){
         console.log("fetch trailer rerror", error)
        }
    }

    useEffect(() => {
      fetchTrailers()
    }, [movieId])

    const opts = {
      height: '200',
      width: '300'
    }
    
  return (
    <div className=''>
      {
        trailer.length>0 &&
      
    <div className='mt-16'>
        <h1 className='text-3xl text-yellow-500 font-bold'>Watch Trailers</h1>
   <div className='flex flex-wrap'>
    {
      trailer.map((link, ind) => 
    <div  key = {ind}className='flex flex-col gap-2 mt-4'>
      <YouTube videoId={link.key} opts={opts} />
      <h1 className='text-xl w-[300px]'>{link.name}</h1>
      </div>
    )
    }
   </div>
    </div>
    }
    </div>

  )
}

export default Trailer;
