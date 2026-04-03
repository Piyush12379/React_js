import React from 'react'
import { useNavigate } from 'react-router-dom';

const Review = () => {
     const navigate=useNavigate();
    return (
        <>
    <div>Review</div>
    <button onClick={()=>navigate(-1)}>return back to result</button>
    </>
  )
}

export default Review