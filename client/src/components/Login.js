import './Login.css';

function Login() {



    return (<>
    
    
<div class="login-image"> 

<img src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="login-img"/>

</div>
       
       
       <form className="login-form"  method="post">
       <div class="imgcontainer">
            <img src="https://api.freelogodesign.org/files/32f0cf4ec5e4472bbe8c77d33669c459/thumb/logo_200x200.png?v=637685737110000000" alt="Avatar" class="avatar"/>
       </div>
           <div className="user-container">
                   <label className="user" for="uname"><b>Username</b></label>
                   <input className="userinput" type="text" placeholder="Enter Username" name="uname" required/>
           </div>
           <div className="password-container">
                   <label className="pass" for="psw"><b>Password</b></label>
                   <input className="passinput" type="password" placeholder="Enter Password" name="psw" required/>

                
                   <button className="login" type="submit"> Login</button>
                  

                   {/* <input type="checkbox" checked="checked" name="remember"/> Remember me</label> */}
                   
         </div>

                 <div class="container">
                 <br>
                </br>
                 <span class="psw">Forgot <a href="#">password?</a></span>
                 </div>
     </form>
    
    
    </>)
    
    
}


export default Login;