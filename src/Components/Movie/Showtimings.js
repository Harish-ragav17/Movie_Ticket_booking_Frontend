import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../Styles/movie.css'
import { getTimings } from '../../Api/api.js';

const Showtimings = ({timing1,setTiming1,setTiming2,setTiming3,setSelected}) => {
  const {id} = useParams();
  
  useEffect(()=>{
    getTimings(setTiming1,setTiming2,setTiming3,id);
    setSelected(id);
  })
  
  return (
    <div>
      <div>
        <h2>Show Timings</h2>
      </div>
      <div class='timings-container'>
          
         <Link to={"/book/1"}>
            <div className='timings'>
                10.00 AM
            </div>
         </Link>

         <Link to={"/book/2"}>
            <div className='timings'>
                2.00 PM
            </div>
         </Link>

         <Link to={"/book/3"}>
            <div className='timings'>
                6.30 PM
            </div>
         </Link>
      </div>
    </div>
  )
}

export default Showtimings
