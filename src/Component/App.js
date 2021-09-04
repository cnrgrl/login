import React, { useState} from 'react';
import LoginForm from './LoginForm';



function App (){

const adminUser={
    email:"admin@admin.com",
    password:"admin123"
}

const [user, setUser]=useState({name:"", email:""});
const [error,setError]=useState("");

const LogIn=details=>{

    console.log(details);
    if (details.email==="adminUser.email" && details.password === adminUser.password){
        console.log("Logged in");
        setUser({
            name:details.name,
            email:details.email
        });
    }
    else {
        console.log("Details do not match");
    }
}
const Logout=()=>{
    console.log("Logout")
}

        return (
            <div className="container">

                {(user.email !=="") ? ( <div>
                    <h2>Welcome<span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>): (
                <LoginForm LogIn={LogIn} error={error}/>
                )}
                

            </div>);
    
}
export default App;