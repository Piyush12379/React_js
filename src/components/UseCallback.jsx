import React, { use } from 'react'
import { useState,useCallback,useRef } from 'react';
const Child=({handle})=>{
    console.log("child rendered");
    return <button onClick={handle}>Click me</button>
}

const UseCallback =()=>{
        const [count,setCount]=useState(0);  
        const handleClick=()=>{
             setCount(count+1);
        }
        const handle=useCallback(()=>{
            console.log("chil")
        },[])
    return(
        <>
           <h1>Count: {count}</h1>
          <button onClick={handleClick}>Increase</button>
           <Child handle={handle}/>
        </>
    )
}

export default UseCallback;