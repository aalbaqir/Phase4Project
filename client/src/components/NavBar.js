import React from 'react';
import {NavLink} from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';
// import Login from './Login';



function NavBar(){


    return(<>
        
          <div className="logo">
            <NavLink className="logo-button" to="./">
            <img src="https://api.freelogodesign.org/files/1dacde6581c64cf6b6d497b61e106a36/thumb/logo_200x200.png?v=637685677970000000" alt="logo"/>
            </NavLink>
            </div>
        <nav className="navbar">
            
            <NavLink className="button" to="./VibeOfTheDay">
                Vibe of the Day
            </NavLink>
            <NavLink className="button" to="./YourVibes">
                Your Vibes
            </NavLink>
            <NavLink className="button" to="./TheVibeSociety">
                The Vibe Society
            </NavLink>
            <NavLink className="login-button" to="./Login">
                Log-In or Sign-Up 
            </NavLink>
            </nav>
           
  </>  )
}






export default NavBar; 