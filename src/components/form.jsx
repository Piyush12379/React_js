import React, { useState,useEffect } from 'react'

const Form = () => {
   const [name,setName]=useState("");
   const [delayname,setDelayName]= useState("");
   useEffect(()=>{
      
      const fill=setTimeout(
       ()=>{
            setDelayName(name);
       },500)

       return ()=>clearTimeout(fill);

    },[name])
  
  return (
    <>
      <h1>{delayname}</h1>
     <input type="text"  value={name} placeholder="Enteer name" onChange={(e)=>setName(e.target.value)} />
     <button type='submit'>Submit</button> 

    </>
  )
}

export default Form