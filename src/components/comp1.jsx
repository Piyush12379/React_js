import React,{useContext} from 'react'
import { Counti } from './context';
const Comp1 = () => {
    const countn=useContext(Counti);
    return (

    <div>This is comp1 and {countn.count}</div>
  )
}

export default Comp1