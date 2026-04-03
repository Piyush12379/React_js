import React, { useReducer } from 'react'

const UseReducer = () => {
   const reduceri=(state,action)=>{
       if(action.type === "Increase"){
        return state+1;
       }
       if(action.type === "Decrease"){
        return state-1;
       }
   };



    const [count,dispatchi]=useReducer(reduceri,0);
  return (
    <>
    
    
    <div>UseReducer: {count}</div>
    <button onClick={()=>dispatchi({type:"Increase"})}>increment</button>
    <button onClick={()=>dispatchi({type:"Decrease"})}>Decrement</button>
    
    </>
  )
}

export default UseReducer