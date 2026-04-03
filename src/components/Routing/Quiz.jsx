import React from 'react'
import { useNavigate } from 'react-router-dom';
const Quiz = () => {
    const navigate= useNavigate();
  return (
    <>
       <div>Quiz</div>
       <button onClick={()=>navigate("/result",{replace :true})}>Submit</button>
    </>
    
  )
}

export default Quiz