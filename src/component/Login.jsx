import { useState } from "react"



const Login =()=>{
     const collectdata =()=>{
        console.log( email,password)

    }


    
    const [email , setEmail] =useState("");
    const [password , setPassword] =useState("");
    return (
        <div className='signup'>
            <h1 >Login</h1>
            
            <input className='inputfilled' type="text" onChange={(e)=>setEmail(e.target.value)} placeholder ="Enter Email"/>
            <input className='inputfilled'  type="Password" onChange={(e)=>setPassword(e.target.value)} placeholder ="Enter Password"/>
            <button onClick={collectdata} className='signupbtn'type="button">Login</button>
        </div>
    )
}
export default Login