import React from "react";

const Login=()=>{
    return(
        <>
        
        <form style=
        {{display:"flex",
        flexDirection:"column",
        width:"25rem",
        marginLeft:"40vw",
        
        }

        }>
        <input style={{marginTop:"30vh"}}  type="text" placeholder='username' />
        <input style={{marginTop:"20px"}} type="password" placeholder='password' />
        <button style={{width:"4rem",marginLeft:"10vw",marginTop:"20px"}}>Login</button>
        </form>
        </>
    )
}
export default Login