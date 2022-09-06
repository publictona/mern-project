import { useState } from "react"



const SignUp =()=>{
     const collectdata =()=>{
        console.log(name, email,password)

    }


    const [name , setName] =useState("");
    const [email , setEmail] =useState("");
    const [password , setPassword] =useState("");
    return (
        <div className='signup'>
            <h1 >SignUp</h1>
            <input className='inputfilled' type="text" onChange={(e)=>setName(e.target.value)} placeholder ="Enter Name"/>
            <input className='inputfilled' type="text" onChange={(e)=>setEmail(e.target.value)} placeholder ="Enter Email"/>
            <input className='inputfilled'  type="Password" onChange={(e)=>setPassword(e.target.value)} placeholder ="Enter Password"/>
            <button onClick={collectdata} className='signupbtn'type="button">Sign-Up</button>
        </div>
    )
}
export default SignUp