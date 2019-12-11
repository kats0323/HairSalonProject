import React from 'react';
import './Login.css' //importing css file from Login.css

export default function Login() { //exporting this component into react app
    return (
        <div>
            {/* this is the is the background with gradient and blurred effect */}
            <div className="outerbox" style={{width:"100vw",height:"100vh"}} /> 
            <div class="bg-text">
            <h1 class="login-title">Login</h1>
                <form>
                    <input class="input" type="text" placeholder="Username" /> {/* Text field input */}
                    <input class="input" type="password" placeholder="Password" />{/* Password field hides the password */}
                    <button type="submit" id="login-button" class="login-button">Login</button>{/* this is the login button */}
                </form>
            </div>
        </div>
    );
  }
  
  