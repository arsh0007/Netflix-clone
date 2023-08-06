import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectuser } from '../features/userSlice';

function ProfileScreen() {
  const user = useSelector(selectuser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen_body">
          <h1>
            Edit Profile
          </h1>
          <div className="profileScreen_info">
          <img 
                src="https://th.bing.com/th/id/OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.6&pid=1.7" 
                alt="Netflix-Avatar" 
            />
            <div className="profileScreen_details">
              <h2>{user.email}</h2>
              <div className="profileScreen_plans">
                  <h3>Plans</h3>
                <button onClick={()=> auth.signOut()}
                 className="profileScreen_signout">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen