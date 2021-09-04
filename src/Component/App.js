import React, {useState} from 'react';
import LoginForm from './LoginForm';



function App (){

const adminUser={
    email:"admin@admin.com",
    password:"admin123"
}

const [user, setUser]=useState({name:"", email:""});
const [error,setError]=useState("");

const Login=details=>{

    console.log(details);
}
const Logout=()=>{
    console.log("Logout")
}

        return (
            <div className="container">

                {(user.email !=="") ? ( <div>
                    <h2>Welcome<span>{user.name}</span></h2>
                </div>): (<LoginForm/>)}
                
                login page

            </div>);
    
}
export default App