import { useState } from 'react';

function Logout(props) {

  
  const [user, setUser] = useState(null);
//   const [ActiveUser, setUser] = useState(null);
  


  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })

    .then()
    console.log("logout button clicked!!")
        // .then(res => res.json())
        // .then(loggedInUser => {
        //   console.log(loggedInUser) 

        //   setUser( {} )
           
        //   props.history.push("/login")
        //     alert("Logged Out")
        
            
    }
 
    return (<>
        
  
  </>  )
  }



  export default Logout;