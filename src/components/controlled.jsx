import React,{useState} from "react";

const Controlled=()=>{
     const [name,setName]=useState("");
    return(
      <>
        
        <h1>{name}</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

               
      </>
    )
}

export default Controlled;