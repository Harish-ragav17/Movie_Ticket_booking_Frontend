import React, { useEffect, useState } from 'react'
import raayan from '../img/raaya.jpeg'
import '../Styles/home.css'
import { Link } from 'react-router-dom'
import { getMovies }  from '../Api/api.js'

const Home = ({setSelected}) => {
  const [movies,setMovies] = useState([]);
  const [homedata,setHomeData] = useState(false);

  useEffect(()=>{
     getMovies(setMovies,setHomeData);
  },[setMovies])

  return (
    <div>
      <div>
        <h2>
            Movies
        </h2>
      </div>
      <div id='movieslist'>
           <div class='movieslist-container'>
            {
              !homedata ?
              (
                 <>
                  <div id='spinner'>
  
                  </div>
                 </>
              )
              :
              (
                  movies.map((movie)=>
                    <div className='cards'>
                    <img src={raayan} className='img'/>
                    <h2>
                      {movie.name}
                    </h2>
                    <Link to={`/timings/${movie._id}`}>
                      <input type='submit' value="Book Now" />
                    </Link>
                    </div>
                  )
              )
            }
            
            
           </div> 
      </div>
    </div>
  )
}

export default Home
