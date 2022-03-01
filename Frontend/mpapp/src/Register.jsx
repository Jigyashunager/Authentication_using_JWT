import React from "react";
import {
    Link
  } from 'react-router-dom';

const Register=()=>{
    return(
        <>
        
        <form
        style=
        {{display:"flex",
        flexDirection:"column",
        width:"25rem",
        marginLeft:"40vw",
        
        }

        }>
        <input style={{marginTop:"30vh"}}type="name" placeholder='username' />
        <input style={{marginTop:"20px"}}type="email" placeholder='email' />
        <input  style={{marginTop:"20px"}}type="password" placeholder='setpassword' />
        <button style={{margin:"20px 0 0 10vw",width:"5vw"}}><Link to='/login' >SignUp</Link></button>
        </form>
        </>
    )
}
export default Register