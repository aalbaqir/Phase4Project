import React, { component } from 'react';
// import { useState, useEffect } from 'react';
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

  // const [quote, setQuote] = useState ([])
  
  // useEffect(() => {
  //   fetch("https://type.fit/api/quotes")
  // .then(response =>response.json())
  // .then(fetchedQuotes=>{
  //   console.log(fetchedQuotes)
  //   setQuote(fetchedQuotes)});
  // },[])
  
   
  


    return (
   
      <BrowserRouter>
      
      
        <Header/>
          {/* <NavBar/> */}
         
         <Switch>
           
            <Route exact path='/' component={Home}/>
            <Route exact path='/YourVibes' component={YourVibes}/>
            <Route exact path='/VibeOfTheDay' component={VibeOfTheDay}/>
            <Route exact path='/TheVibeSociety' component={TheVibeSociety}/>
            <Route exact path='/Login' component={Login}/>

          
        </Switch>  
       
       
      
      </BrowserRouter>
    );
  }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
