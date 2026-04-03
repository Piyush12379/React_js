import React,{useState} from 'react'

const Counter = () => {
    const [counter,setCount]=useState(0);
  return (
    <>
    <h1>increase: {counter}</h1>

     <button onClick={()=>setCount(counter+1)}>Increase</button>
     <button onClick={()=>setCount(counter-1)}>Decrease</button>
    </>
  )
}

export default Counter