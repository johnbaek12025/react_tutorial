import {useParams} from "react-router-dom";
import {useEffect, useState} from "react"
import Movie from "../components/Movie"

function Detail(){
    const[loading, setLoading] = useState(true);
    const[movie, setMovie] = useState([]);
    const {id} = useParams()
    const getMovie = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        if (json.status === 'ok')
        {   
            setMovie(json.data.movie);
            setLoading(false)
        }
    }                
    return (<div>
            {useEffect(() => {
         getMovie()
    }, [])}
      {loading?<h1>Loading....</h1>: <div>
        <img src={movie.medium_cover_image} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <ul>
            {movie.genres.map((g) => (
            <li key={g}>{g}</li>
            ))}
        </ul>
        </div>}
      </div>)

}
export default Detail;