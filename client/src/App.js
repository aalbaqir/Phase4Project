import React, { component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
// import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import YourVibes from './components/YourVibes';
import VibeOfTheDay from './components/VibeOfTheDay';
import TheVibeSociety from './components/TheVibeSociety';
import Login from './components/Login';
// import theVibeSociety from './components/TheVibeSociety';


function App() { 

  const [backQuote, setBackQuote] = useState ([])
  // setBackQuote(["flatiron", "school"])
  
  useEffect(() => {
  fetch("http://localhost:3000/quotes")
  .then(response =>response.json())
  .then(fetchedBackQuotes=>{
    // console.log(fetchedBackQuotes)
    setBackQuote(fetchedBackQuotes)});
    
  },[])
  
  //  console.log(backQuote)
  

return (<>
   
          <BrowserRouter>
          
          
            <Header/>

            
            
            
            <Switch>
              
                <Route exact path='/' component={Home}/>
                <Route exact path='/YourVibes' component={YourVibes}/>
                <Route exact path='/VibeOfTheDay' component={VibeOfTheDay}/>
                <Route exact path='/TheVibeSociety' component={TheVibeSociety}/>
                <Route exact path='/Login' component={Login}/>

              
            </Switch>  
          
          
          
          </BrowserRouter>

        
         {backQuote.map(eachBQuote =>{
          //  console.log(eachBQuote)
         
          return(<h3>{<VibeOfTheDay eachBQuote={eachBQuote}/>}</h3>)
  
          
       
          }
         )}
    
  
  
  
  
    </>);
  




}

export default App;
