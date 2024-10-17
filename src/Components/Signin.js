import React, { useState } from 'react'
import '../Styles/login.css'
import { signin } from '../Api/api';

const Signin = ({setloggedInId,setLoggedIn,setError,error}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit=(e)=>{
       e.preventDefault();
        setError("");
       if(email == "" || password == "")
       {
        setError("Please Fill all the fields")
       }
       else{
        signin(email,password,setloggedInId,setLoggedIn,setError);
       }
    }

  return (
    <div id='signin'>
        <div id='head'>
          Login to Book Tickets..!  
        </div>
       <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
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
        </div>
    </div>
  )
}

export default Signin
