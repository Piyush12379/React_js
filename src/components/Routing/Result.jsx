import React from 'react'
import { useNavigate } from 'react-router-dom'
const Result = () => {
    const navigate=useNavigate();
    return (
        <>
    <div>Result</div>
    <button onClick={()=>navigate('/review')}>Go to review</button>
     <button onClick={()=>navigate(-1)}>Go to quiz</button>
    </>
  )
}

export default Result