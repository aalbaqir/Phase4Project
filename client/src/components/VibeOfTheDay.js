import { useState, useEffect } from 'react';

function VibeOfTheDay() {
// This page just renders a random quote for people to ponder on and 
// leave reflections, comments, or stories that the quote evokes.
const [backQuote, setBackQuote] = useState ([])
// setBackQuote(["flatiron", "school"])

useEffect(() => {
fetch("http://localhost:3000/quotes")
.then(response =>response.json())
.then(fetchedBackQuotes=>{
  // console.log(fetchedBackQuotes)
  setBackQuote(fetchedBackQuotes)});
  
},[])

 console.log(backQuote)

 

return (<div>
 
 {backQuote.map(eachBQuote =>{
           console.log(eachBQuote)
         
          return(<h3>{eachBQuote.quote}</h3>)
  
          
       
 
         })}
    

    
    

  
    
    </div>)
}

export default VibeOfTheDay;