import React from 'react'
import { useNavigate } from 'react-router-dom'
const Main = () => {
      const navigate=useNavigate();
      const id=5;
    return (
    <>  
     <h1>Main page</h1>
      <button onClick={()=>navigate("/comp3",{state:{id:id}})}> go to comp3</button>
    </>
  )
}

export default Main