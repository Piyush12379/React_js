import React from 'react'
import { useLocation } from 'react-router-dom'
const Comp3 = () => {
     const location=useLocation();
    return ( 
    <>
    <h1>Hello  {location.state?.id}</h1>
      
    
    </>
  )
}

export default Comp3