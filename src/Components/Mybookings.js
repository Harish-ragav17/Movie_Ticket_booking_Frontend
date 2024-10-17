import React, { useEffect, useState } from 'react'
import { getBookings } from '../Api/api';
import '../Styles/bookings.css'

const Mybookings = ({loggedInId}) => {
  const [bookings,setBookings] = useState([]);

  useEffect(()=>{
    getBookings(setBookings,loggedInId);
  },[])
  return (
    <div>
      <div id='bookings'>
         <h2>My Bookings</h2>
         <div >
        {
          (bookings.length == 0) ? "No Bookings Yet" 
          :
          <div id='list'>
            {
              bookings.map((booking)=>
                <div className='cards'>
                  <h2>Movie Name: {booking.MovieName}</h2>
                  <h2>Ticket Count : {booking.count}</h2>
                  <br/>
                  <input id='cancel-ticket' type='submit' value={"Cancel Ticket"}/>
                </div>
              )
            }
          </div> 
        }
         </div>
      </div>
    </div>
  )
}

export default Mybookings
