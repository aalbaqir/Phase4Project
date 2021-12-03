import React from 'react';
// import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import YourVibes from './components/YourVibes';
import VibeOfTheDay from './components/VibeOfTheDay';
import TheVibeSociety from './components/TheVibeSociety';
import Login from './components/Login';
import Signup from './components/SignUp';
import Profile from './components/Profile';
// import NavBar from './components/NavBar';



function App() { 



  
  // <NavBar setUser={setUser} user={user}/>




return (<>
      
      {/* <Login onLogin={setUser} />; */}
  
                    
          {/* <Signup setCurrentUser={setCurrentUser}/> */}
          
          <BrowserRouter>
          
          
            <Header/>

            
            
            
            <Switch>
              
                <Route exact path='/' component={Home}/>
                <Route exact path='/YourVibes' component={YourVibes}/>
                <Route exact path='/VibeOfTheDay' component={VibeOfTheDay}/>
                <Route exact path='/TheVibeSociety' component={TheVibeSociety}/>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/SignUp' component={Signup}/>
                <Route exact path='/Profile' component={Profile}/>


              
            </Switch>  
          
          
          
          </BrowserRouter>

       
  
  
  
  
    </>);
  


  

}

export default App;
