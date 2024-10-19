import React, { useEffect, useState } from 'react';
import '../../Styles/movie.css';
import { useParams } from 'react-router-dom';
import { updateSeats, updateSeatsTemp, updateUserBookings } from '../../Api/api';
import { useNavigate } from 'react-router-dom';

const Seatbooking = ({ timing1, timing2, timing3 , selected ,loggedInId , setReload}) => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]); 
  const [seats, setSeats] = useState([]); 
  const [d, setD] = useState(-1);
  
  const navigate = useNavigate();
  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  // useEffect(()=>{

  //   if(!id ||isEmpty(timing1)||isEmpty(timing2) ||isEmpty(timing3))
  //   {
  //       navigate(-1);
  //       window.location.reload();
  //   }
  // },[])

  React.useEffect(() => {
    if (id === "1") {
      setSeats(timing1.seats);
      setD(1);
    } else if (id === "2") {
      setSeats(timing2.seats);
      setD(2);
    } else if (id === "3") {
      setSeats(timing3.seats);
      setD(3);
    }
  }, [id, timing1.seats, timing2.seats, timing3.seats]);

  const toggleSeat = (index, booked) => {
    if (booked) return; 
    console.log(seats)

    const newseats = seats.map((seat, i) => {
      if (i === index) {
          return {
              ...seat, 
              selected: !seat.selected, 
          };
      }
      return seat; 
  })
  
    updateSeatsTemp(d,newseats,selected);

    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter(seat => seat !== index); 
      } else {
        return [...prevSelected, index]; 
      }
    });
  };

  const handleBooking = () => {
     updateUserBookings(selectedSeats.length,selected,loggedInId);

    const updatedSeats = seats.map((seat, index) => {
      if (selectedSeats.includes(index)) {
        return { ...seat, booked: true }; 
      }
      return seat;
    });

    setSeats(updatedSeats); 
    setSelectedSeats([]); 

    updateSeats(d, updatedSeats, selected); 
    alert("Booked Sucessfully");
  };

  return (
    <div>
      <h2 style={{textAlign:"center",color:"red"}}>Do not reload this page..!</h2>
      <div id='seats-container'>
        
        {seats.map((seat, index) => (
          (seat)?
          <div
            className={`${seat.booked ? "seat-booked" : ""} ${seat.selected ? "seat-selected" : "seat"} ${selectedSeats.includes(index) ? "seat-clicked" : ""}`}
            key={index}
            onClick={() => {
              if (!seat.selected && !seat.booked) {
                toggleSeat(index, seat.booked);
              }
          }} 
          style={{
            cursor: seat.selected ? "not-allowed" : "pointer",
            backgroundColor: seat.selected ? "yellow" : "",
            width: "40px" ,
            border : "2px solid black"
          }}
          >
            {index + 1}
          </div>
          :
          <></>
        ))}
      </div>
      <div>
        <input type='button' value={"Book Now"} onClick={handleBooking} /> 
      </div>
    </div>
  );
};

export default Seatbooking;
