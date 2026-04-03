import React,{use, useEffect,useState} from 'react'

const UseEffect = () => {
    const  [increase,setIncrease]=useState(0);
    const  [decrease,setDecrease]=useState(10);
    useEffect(()=>{
        console.log("loading ....")
    },[increase])
  return (
    <>
       <h1>Increase: {increase}</h1>
       <h1>Decrease: {decrease}</h1>
      <button onClick={()=>setIncrease(increase+1)}>Increase</button>
      <button onClick={()=>setDecrease(decrease-1)}>decrease</button>
    </>
  )
}
 
export default UseEffect