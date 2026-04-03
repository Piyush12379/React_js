import React from 'react'
import { useParams } from 'react-router-dom'
const Add = () => {
    const {num}=useParams();
  return (
    <div>Add {num}</div>
  )
}

export default Add