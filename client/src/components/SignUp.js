// import { ModalBody } from 'react-bootstrap';
import './SignUp.css';
import './Login.css';

import { useState } from 'react';
// import Login from './Login';


function Signup(props) {

    
    

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
// const [Login, setLogin] = useState('')
// const [CurrentUser, setCurrentUser] = useState(null);
const [passwordConfirmation, setPasswordConfirmation] = useState('')




function onSubmit(e){
    e.preventDefault()
    const user = {
        username,
        password,
        password_confirmation: passwordConfirmation
        
    }

    fetch('/users',{
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(user)
    })

    alert("You've Successful Signed Up! Please Sign-In")
    props.history.push('/Login')
  

}






return (<>
    
    
<div class="SignUp-image"> 

<img src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="SignUp-img"/>

</div>
       
       
       <form onSubmit={onSubmit} className="SignUp-form"  method="post">
       <div class="imgcontainer">
            <img src="https://api.freelogodesign.org/files/32f0cf4ec5e4472bbe8c77d33669c459/thumb/logo_200x200.png?v=637685737110000000" alt="Avatar" className="myavatar"/>
       </div>
           <div className="suser-container">
                   <label className="suser" for="uname"><b>Username</b></label>
                   <input className="suserinput" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" name="uname" required/>
           </div>
           <div className="spassword-container">
                   <label className="spass" for="psw"><b>Password</b></label>
                    <input className="spassinput" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" name="psw" required/>
            </div>      
            <div className="conpassword-container">
                   <label className="spass" for="psw"><b>Confirm Password</b></label>
                   <input className="spassinput" type="password" value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} placeholder="Enter Password" name="psw" required/>
    
                   <button className="SignUp" type="submit"> SignUp</button>
                  

                   {/* <input type="checkbox" checked="checked" name="remember"/> Remember me</label> */}
                   
         </div>

               
     </form>
    
    
    </>)
    
    
}


export default Signup;