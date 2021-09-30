import React, { useState, useEffect } from 'react';
import './theVibeSociety.css';

function TheVibeSociety() {

// This page will be used as a sort of social media type page 
// that has content that reflects around positivity
// and motivation. This content will mostly be quotes, but can include 
// pictures and memes that raiser vibrations. 

const [quote, setQuote] = useState ([])
  
useEffect(() => {
  fetch("https://type.fit/api/quotes")
.then(response =>response.json())
.then(fetchedQuotes=>{
  console.log(fetchedQuotes)
  setQuote(fetchedQuotes.slice(1,101))});
},[])

 console.log(quote)



  return (
  <div>




    {quote.map(eachQuote =>{ console.log(eachQuote)
        return(<>
            <div className="dontQuoteMe">
                <h3>"{eachQuote.text}"</h3>
                <h4> {eachQuote.author}</h4>
                {/* <br></br> */}
                </div>
                    </>)}
    )}
    
    
    

    
    
    </div>)
}


export default TheVibeSociety;