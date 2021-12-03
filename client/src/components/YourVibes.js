import './YourVibes.css';
import { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom'



function YourVibes(props) {
// This is someone's personal vibe page that features content that the like
// Ideally the page will be split into columns. There can also be a journal-like
// feature where the person writes about their day, dreams, or aspiration.
// Instead of of two columns, this would be better as a toggle feature,
// so users can toggle between their journal and their wall.

const [journal, setJournal] = useState ([])
const [entry, setEntry] = useState([])
const [profile, setProfile] = useState ([])
const [user, setUser] = useState(null);
const [byeuser, setByeUser] = useState("");
   

    
useEffect(() => {
    fetch("http://localhost:3000/journals")
    .then(response =>response.json())
    .then(fetchedjournals=>{
     
        console.log(fetchedjournals)
      
      
      setJournal(fetchedjournals)});
      
    },[])
        // journal=journal
        // console.log(journal)


        // useEffect(() => {
        //     fetch("http://localhost:3000/pro")
        //     .then(response =>response.json())
        //     .then(fetchedusers=>{
             
        //         console.log(fetchedusers)
              
              
        //       setProfile(fetchedusers)});
        //       console.log(profile)
        
              
        //     },[])

    const handleSubmit=(e)=>{
        

        
            console.log("Journal Me Baby!")
            e.preventDefault()
            const newJournal = {
                entry
                
            }
            console.log(newJournal)
            fetch("http://localhost:3000/journals", {
                method: "POST",
                headers:{'Content-Type':'application/json',
                        'Accept': 'application/json'
            },
                body:JSON.stringify(entry)
            })
        
            alert("New Entry")
            

        }       
        

function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
 
        .then(response => response.json())
        .then(loggedInUser => {
          console.log(loggedInUser) 

          setUser(loggedInUser )
           
          props.history.push("/login")
            alert("Logged Out")
        
            
          })}

function handleDelete() {
            fetch(`http://localhost:3000/users/${107}`, {
              method: "DELETE"
            })
         
                .then(response => response.json())
                .then(deletedUser => {
                  console.log(deletedUser) 
        
                  setByeUser(deletedUser )
                   
                  props.history.push("/signup")
                    alert("Account Deleted")
                
                    
                  })}   
                  
                  
 function handleEdit(){
        

 }                 

return(<div>
     <NavLink onClick={handleLogout} className="logout-button" to="./logout">
                Log-Out
      </NavLink>

            <button className="delete" onClick={handleDelete}> Delete Account</button>
           
            <div class="row">
                <form onSubmit={handleSubmit} className="journal">
                            <h2>Journal Your Current Vibes</h2>
                            <input className="entry" type="text" onChange={(e)=>setEntry(e.target.value)} placeholder="What's On Your Mind?" name="entry" required/>
                        <button  className="journal-button" type="submit"> Submit Entry</button>
                </form>        
                   
                
             
            </div> 
            {journal.map(eachEntry=>{ console.log(eachEntry) 
            
      return(          
                 
                        <div class="column2">
                        <h3>{eachEntry.entry}</h3>
                        <button className="edit">edit</button>
                        </div>
                
           
        )  
        
    })}
        
   
    </div>)
    
}

export default YourVibes;