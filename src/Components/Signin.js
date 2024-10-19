import React, { useState } from 'react'
import '../Styles/login.css'
import { signin } from '../Api/api';
import ClipLoader from "react-spinners/ClipLoader";

const Signin = ({setloggedInId,setLoggedIn,setError,error}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("black");


    const handleSubmit=(e)=>{
       e.preventDefault();
       setError("");
       if(email == "" || password == "")
       {
        setError("Please Fill all the fields")
        setLoading(false);
       }
       else{
        setLoading(true);
        signin(email,password,setloggedInId,setLoggedIn,setError,setLoading);
       }
    }

  return (
    <div id='signin'>
        <div id='head'>
          Login to Book Tickets..!  
        </div>
       <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}  style={{marginBottom:"10px"}}>
                <div>
                    <label>Email</label>
                    <input 
                        id='email'
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="login-input" 
                        required 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="login-input" 
                        required 
                    />
                </div>
                {error && <div className="login-error">{error}</div>}
                <button type="submit" className="login-button">Login</button>
            </form>
            <ClipLoader
                color={color}
                loading={loading}
                // cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    </div>
  )
}

export default Signin
