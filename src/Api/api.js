import axios from "axios";
//const url = 'http://localhost:4000';
const url = 'https://movie-ticket-booking-backend-mblk.onrender.com';


const getMovies=async(setMovies)=>{
     try{
            await axios.get(`${url}/allMovies`).then((data)=>{
                setMovies(data.data);
            })
            
     }
     catch(err)
     {
         console.log(err)
     }
}


const getTimings=async(setTiming1,setTiming2,setTiming3,id,setDataFetched)=>{
    try{
           await axios.post(`${url}/getTiming1`,{id}).then((data)=>{
              setTiming1(data.data);
              setDataFetched(true);
           })

           await axios.post(`${url}/getTiming2`,{id}).then((data)=>{
             setTiming2(data.data);
             setDataFetched(true);
        })

        await axios.post(`${url}/getTiming3`,{id}).then((data)=>{
            setTiming3(data.data);
            setDataFetched(true);
        })
    }
    catch(err)
    {
        console.log(err)
    }
}

const updateSeatsTemp=async(id,newseats,selected)=>{
    try{
        if(id === 1)
        {
            await axios.post(`${url}/updateSelected1`,{seats:newseats,did:selected}).then((data)=>{
            })

        }
        else if(id === 2)
        {
            await axios.post(`${url}/updateSelected2`,{seats:newseats,did:selected}).then((data)=>{
           
            })
        }
        else if (id === 3)
        {
            await axios.post(`${url}/updateSelected3`,{seats:newseats,did:selected}).then((data)=>{
              
            })
        }
      
    }
    catch(err)
    {

    }
}


const updateSeats = async(id,seats,did) =>
{
    try{
        if(id === 1)
        {
            await axios.post(`${url}/updateTiming1`,{seats:seats,did:did}).then((data)=>{
            })

        }
        else if(id === 2)
        {
            await axios.post(`${url}/updateTiming2`,{seats:seats,did:did}).then((data)=>{
           
            })
        }
        else if (id === 3)
        {
            await axios.post(`${url}/updateTiming3`,{seats:seats,did:did}).then((data)=>{
              
            })
        }
      
    }
    catch(err)
    {

    }
}


const signin = async(email,password,setloggedInId,setLoggedIn,setError) => {
    await axios.post(`${url}/signin`,{email:email,password:password}).then((data)=>{
        if(data.data == "Wrong password")
        {
            setError("Wrong Password");
        }
        else if ( data.data == "User not found")
        {
            setError("User Not Found");
        }
        else
        {
            console.log(data.data)
            setloggedInId(data.data);
            setLoggedIn(true);
        }
    })
}

const getBookings = async(setBookings,loggedInId) =>{
    await axios.post(`${url}/getBookings`,{id:loggedInId}).then((data)=>{
       setBookings(data.data);
    })
}

const updateUserBookings=async(seats,selected,loggedInId)=>
{
    // console.log(selectedSeats+" "+seats+" "+selected+" "+loggedInId);
    await axios.post(`${url}/updateBookings`,{count:seats,movieid:selected,id:loggedInId}).then((data)=>{
      console.log("updated");
    })
}



export {getMovies,getTimings,updateSeats,signin,getBookings,updateUserBookings,updateSeatsTemp}