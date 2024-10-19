import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Components/Layout';
import Signin from './Components/Signin';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Showtimings from './Components/Movie/Showtimings';
import Seatbooking from './Components/Movie/Seatbooking';
import Mybookings from './Components/Mybookings';

function App() {
  const [isLoggedIn,setLoggedIn] = useState(false);
  const [timing1,setTiming1] = useState({});
  const [timing2,setTiming2] = useState({});
  const [timing3,setTiming3] = useState({});
  const [selected,setSelected] = useState("");
  const [loggedInId,setloggedInId] = useState("");
  const [error, setError] = useState('');
  const [reload,setReload] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("user"))
    {
      let currentDate = localStorage.getItem("loggedinTime");
      const timeNow = new Date();
      const timeLoggenIn = new Date(currentDate);
      const diff = timeNow - timeLoggenIn ; 
      const limit = 30 * 60 * 1000; //30 minutes converted to Milliseconds
      
      if(diff > limit)
      {
             localStorage.removeItem("user");
             localStorage.removeItem("loggedinTime");
             setLoggedIn(false);
      }else
      {
        setLoggedIn(true);
        setloggedInId(localStorage.getItem("user"))
      }
    }
    else{
      setLoggedIn(false);
    }
  })
  return (
    <BrowserRouter>
    <div className="App">
          <Routes>
            {
            isLoggedIn ? 
                <Route path='/' element={<Layout/>}>

                  <Route path='/' element={<Home />}/>
                  <Route path='/timings/:id' element={<Showtimings timing1={timing1} setTiming1={setTiming1} 
                    setTiming2={setTiming2} setTiming3={setTiming3} setSelected={setSelected}
                    setReload={setReload} reload={reload} />}/>
                  <Route path='/book/:id' element={<Seatbooking 
                    setTiming1={setTiming1} setTiming2={setTiming2} setTiming3={setTiming3} 
                    timing1={timing1} timing2={timing2} timing3={timing3}
                    selected={selected} loggedInId={loggedInId}
                    setReload={setReload} reload={reload} />}/>
                  <Route path='/bookings' element={<Mybookings loggedInId={loggedInId}/>}/>
                </Route>
              :
                <Route path='/' element={<Signin error={error} setError={setError} setloggedInId={setloggedInId} setLoggedIn={setLoggedIn}/>}/>
              }
            
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
