import React, { useEffect } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { getTrending } from '../../store/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MovieList = () => {
  const language=   useSelector((state)=>state.language.language)
  const {trendingMovies} =useSelector((state)=> state.movies)
  let dispatsh=useDispatch()
console.log(trendingMovies);

  useEffect(()=>{
    dispatsh(getTrending('tv'))
  })
  return (
    
    <div className='container-fluid my-4 '>
      <div className="container">
        <button className='btm btn-info py-2 m-3 px-4 shadow text-white'
        onClick={()=>   dispatsh(getTrending('movie'))}
        style={{borderRadius:"20px"}}
        >get/TV</button>
        <button className='btm btn-info m-3 py-2 px-4 shadow text-white'
        onClick={ ()=>  dispatsh(getTrending('movie'))}
        style={{borderRadius:"20px"}}
        >get/movie</button>
      </div>
   <div className="row">
   
      {trendingMovies.map((movie, index) => (
        
        <Card key={index} className='col-3 border my-3 shadow mx-auto rounded'>
          <Link  to={`/movie/${movie.id}`}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            {/* <Card.Text>{movie.text}</Card.Text> */}
          </Card.Body>
          <Card.Footer>
            {/* <small className="text-muted">{movie.updatedAt}</small> */}
          </Card.Footer>
          </Link>
        
        </Card>
      ))}
   </div>
    
     

    </div>
  )
}

export default MovieList
