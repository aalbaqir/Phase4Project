import './Login.css';
import { useState, useEffect } from 'react';


function Profile(props) {
    // console.log(props.user)

// This is someone's personal vibe page that features content that the like
// Ideally the page will be split into columns. There can also be a journal-like
// feature where the person writes about their day, dreams, or aspiration.
// Instead of of two columns, this would be better as a toggle feature,
// so users can toggle between their journal and their wall.

const [profile, setProfile] = useState ([])
const [picture, setPicture] =useState("")
const [bio, setBio] = useState("")
// const [entry, setEntry] = useState([])

// let user = props.user


useEffect(() => {    
    fetch("/profile")
    .then(response =>response.json())
    .then(fetchedusers=>{
     
        console.log(fetchedusers)
      
      
      setProfile(fetchedusers)});
      console.log(profile)

    }, []);

    const newPiceUpdate=(syntheticEvent)=>{
       setPicture(syntheticEvent.target.value)
    }
    const newBioUpdate=(syntheticEvent=>{
        setBio(syntheticEvent.target.value)
    })

    const handleChange=(e)=>{
        

        
        console.log("HIT")
        e.preventDefault()
     
        
        fetch("/profileupdate", {
            method: "PATCH",
            headers:{'Content-Type':'application/json',
                    'Accept': 'application/json'
        },
            body:JSON.stringify({picture: picture, bio: bio})

        })
        console.log(picture)
    

        

    }    

        // journal=journal

return(<div>
    {/* <div class="home-image"> 

<img src="https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="home-img"/>
</div> */}

                    <div class="login-form2">
                    <h2>{profile.username}</h2>
                    <img src={profile.picture} alt="Avatar"/>
                    <h3>{profile.bio}</h3>

                    <form onSubmit={handleChange} className="edit-profile">
                        
                        <input className="profilepic" type="text" value={picture} onChange={(e)=>setPicture(e.target.value)} placeholder="Update Profile Pic" name="profile" required/>
                    <br>
                    </br>
                    <br>
                    </br>
                    <input className="profilebio" type="text" value={bio} onChange={(e)=>setBio(e.target.value)} placeholder="Edit" name="profile" required/>
                    <button  className="bio-button" type="submit"> Update</button>
            </form>        
               
                    </div>

                
           
        
        
   
    </div>)
    
}

export default Profile;