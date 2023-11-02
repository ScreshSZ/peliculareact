import { useEffect, useState } from "react"
import Card from "./Card"
import { Link } from "react-router-dom"


const CardContext = () => {

    const[pelis, setPelis] = useState(([]))
    const API = 'a4f02f70fb287b829f6e7e6e2dcdb311'
    
    useEffect(()=>{
        const llamarApi = async ()=>{
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}`)
            const data = await response.json()
            setPelis(data.results)
            
        }
        llamarApi()
    },[])

  return (
    <div className="contenedorCards">
         {pelis.map((movie)=>{
            return(
                <>
                <Link key={movie.id} className="links" to={`/movies/${movie.id}`}>
                    <Card
                    key={movie.id}
                    title={movie.original_title}
                    image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    />
                </Link>
                </>
            )
        })} 
    </div>
  )
}

export default CardContext