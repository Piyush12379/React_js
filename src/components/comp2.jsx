import React, { useContext } from 'react'
import Comp1 from './comp1'
import { Counti } from './context'
const Comp2 = () => {
    const value=useContext(Counti);
  return (
    <div>
         <button onClick={()=>value.setCount((count)=>count+1)}>Count from comp2</button>
        <h1>This is comp2</h1>
        <Comp1/>
    </div>
  )
}

export default Comp2