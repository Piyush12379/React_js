import React,{useReducer} from 'react'


const UseReducer2 = () => {
    const reducer=(state,action)=>{
        switch(action.type){
            case "+": {
                return state+1;
            }
            case "-":
                return state-1;
            case "reset":
                return 0;
            default:
                return state;
        }
    }
    const [count,dispatch]=useReducer(reducer,0);
  return (
<div>
     <h1>New Count: {count}</h1>         
    <button onClick={()=>dispatch({type:"+"})}>Add</button>
    <button onClick={()=>dispatch({type:"-"})}>Subtract</button>
    <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
</div>
  )
}

export default UseReducer2