import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import {Link} from "react-router-dom";
import MakeUpEssentials from './MakeUpEssentials';
import Header from './Header';
import SuperGlam from './SuperGlam';
import Home from './Home';
import allMakeUp from './allMakeup';





const Routes = () => {
     return (
         
    <BrowserRouter>
    <Header/>
    <nav className="nav-links">
        <span><Link to= "/" > Home </Link></span>
        <span><Link to='/allMakeUp'>   All Makeup   </Link></span>
        <span><Link to='/MakeUpEssentials'> Makeup Essential </Link></span>
        <span><Link to='/SuperGlam'>  Super Glam </Link></span>
        
    </nav>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/MakeUpEssentials' component={MakeUpEssentials}/>
            <Route exact path='/SuperGlam' component={SuperGlam}/>
            <Route exact path='/allMakeUp' component={allMakeUp}/>
        </Switch>
        {/* <PlantsPage/> */}
       
        
    </BrowserRouter>
    
);
 };

 export default Routes;