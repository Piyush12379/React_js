import React,{useState,useEffect} from 'react'

const UseStateTimer = () => {
    const [time,setTime] =useState(0);

    useEffect(()=>{
       const timer=setInterval(()=>{
            setTime(prev=>prev+1);
       },1000)

       return()=>clearInterval(timer);
    },[])

  return (
    <>
    <h1>Time: {time}</h1>
    
    
    </>
  )
}

export default UseStateTimer