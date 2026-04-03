import { useState } from "react"
import React from 'react'

const Initialstate2 = () => {
    const[item,setItem]=useState([]);
    return (
    <>
       { item.map((value,pos)=>{
           return <p key={pos}>{value}</p>
        })
    }
      <button onClick={()=>setItem([...item,`${item.length+1}`])}>Add Item</button>
    </>
  )
}

export default Initialstate2