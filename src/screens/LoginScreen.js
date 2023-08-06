import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';
function LoginScreen() {
    const [signIN, setSignIn] = useState(false);



  return (
    <div className='loginScreen'>
        <div className="loginScreen_background">
            <img
            className='loginScreen_logo' 
            src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" 
                alt="" 
            />
            <button onClick={()=> setSignIn(true)} 
            className='loginScreen_button'>
                Sign In
            </button>
            <div className="loginScrenn_gradiant"/>
        </div>

        <div className="loginScreen_body">
            {signIN ? (
                <SignupScreen/>
            ):(
            <>
                <h1>
                    Unlimited films, TV programmes and more.
                </h1>
                <h2>
                    Watch anywhere. Cancel at any time.
                </h2>
                <h3>
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>

                <div className="loginScreen_input">
                    <form>
                        <input type="email" placeholder='Email Address'/>
                        <button
                        onClick={() => setSignIn(true)} 
                        className="loginScreen_getStarted">
                            GET STARTED
                        </button>
                    </form>
                </div>
            </>
            )}
            
        </div>
    </div>
  )
}

export default LoginScreen