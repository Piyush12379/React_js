import React from 'react'
import { useState } from 'react'

const Initialstate = () => {
  const [state,setState]=useState({color:0,new:0});
    return (
    <>
      <h1>i have {state.color} colors and {state.new}</h1>

      <button onClick={()=>setState({...state,color:state.color+1,new:state.new+2})}>click</button>
    
    </>
  )
}

export default Initialstate