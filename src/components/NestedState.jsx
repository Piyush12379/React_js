import React,{useState} from 'react'

const NestedState = () => {
    const [data,setData]=useState({name:"Piyush",roll:23,subject:{
        maths:32,
        eng :89,
        science:90
    }})

    const handleInput=()=>{
        setData({name:"Ayush",roll:56,subject:{
            ...data.subject,maths:90
        }})
    }
  return (
  <>
  
   <h1>tHE BOY NAMED {data.name}, has roll no {data.roll}, and  he has scored {data.subject.maths} in maths,{data.subject.eng} in english</h1>
   <button onClick={handleInput}>convert</button>
  </>
  )
}

export default NestedState