
 import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetalleMovie from './DetalleMovie'

const DetallesMovies = () => {

    const {id} = useParams()

    const[detalles, setDetalles] = useState(null)

    const API = 'a4f02f70fb287b829f6e7e6e2dcdb311'


    useEffect(()=>{
        const infoPeli = async()=>{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API}`)
            const data = await response.json()
            setDetalles(data)
            
        }
        infoPeli()
    },[id])

    if (!detalles) {
        return <div>Loading...</div>;
    }

  return (
    <div className='contenedorDetalles'>
    <DetalleMovie 
    image={`https://image.tmdb.org/t/p/w300/${detalles.poster_path}`}
    title={detalles.title}
    description={detalles.overview}
    date={detalles.release_date}
    valoracion={detalles.vote_average}
    adult={detalles.adult}
    />
    </div>
  )
}

export default DetallesMovies