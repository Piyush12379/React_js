import React from 'react'
import { useRef,useEffect,useState } from 'react';

const UseRefCounter = () => {
    const [timer,setTimer]=useState(0);
    const timerRef=useRef(null);
    const start=()=>{
        timerRef.current= window.setInterval(()=>{
                setTimer(prev=>prev+1);    
        },1000)
    }
    const stop=()=>{
        if(timerRef.current){

            clearInterval(timerRef.current);
            timerRef.current=null;
        }
    }
  return (
    <>
    <div>timer: {timer}</div>
    <h1>{timerRef.current}</h1>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    </>
  )
}

export default UseRefCounter