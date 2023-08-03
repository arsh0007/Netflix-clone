import React, { useEffect, useState } from 'react';
import './Nav.css';


function Nav() {
    const [show, handleShow] = useState (false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect (() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    },[]);


  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_content">
            <img 
                className="nav_logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" 
                alt="Netflix-Logo" 
            />

            <img 
                className="nav_avatar"
                src="https://th.bing.com/th/id/OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.6&pid=1.7" 
                alt="Netflix-Avatar" 
            />
        </div>
        
    </div>
  )
}

export default Nav