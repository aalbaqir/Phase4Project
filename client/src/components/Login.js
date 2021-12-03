import { useState, useEffect } from 'react';
import Profile from './Profile';
import YourVibes from './YourVibes';
function Login(props) {
  // console.log(props)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
          console.log(user)
        }
      });
    }, []);

    // const onLogin=(e)=>{
     
      
    //   fetch("/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username }),
    //   })
    //     .then((r) => r.json())
    //     .then((user) => onLogin(user));

        
    // }
  
    // 
  
    
    function handleSubmit(e) {
      e.preventDefault()
      e.target.reset()
      console.log("working")
    
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then(res => res.json())
        .then(loggedInUser => {
          console.log(loggedInUser)
          if (loggedInUser.username) {
            setUser(loggedInUser)
            console.log(user)
            props.history.push("/YourVibes")
          }
          else {
            alert("invalid username or password!")
          }

          
        
        }
        )
    }


   const resetForm = () => {
      setUsername("")
      setPassword("")
    }

    // <YourVibes user={user}/>
    // <Profile user={user}/>

 
    return (<>
        {/* <Profile user={user}/> */}
       
        <div class="login-image"> 

        <img src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="SignUp-img"/>
        
        </div>
       
       <form onSubmit={handleSubmit} onReset={resetForm} className="login-form"  method="post">
       <div class="imgcontainer">
            <img src="https://api.freelogodesign.org/files/32f0cf4ec5e4472bbe8c77d33669c459/thumb/logo_200x200.png?v=637685737110000000" alt="Avatar" class="avatar"/>
       </div>
           <div className="user-container">
                   <label className="user" for="uname"><b>Username</b></label>
                   <input className="userinput" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" name="uname" required/>
           </div>
           <div className="password-container">
                   <label className="pass" for="psw"><b>Password</b></label>
                   <input className="passinput" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" name="psw" required/>

                
                   <button className="login" type="submit"> Login</button>
                  

                   {/* <input type="checkbox" checked="checked" name="remember"/> Remember me</label> */}
                   
         </div>
  
    
      </form>
  </>  );
  }



  export default Login;