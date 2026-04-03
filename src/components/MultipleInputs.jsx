import React,{useState} from 'react'

const MultipleInputs = () => {
    const[data,setData]= useState({name:"",age:20,roll:30});

    const handleInput=()=>{
            setData({...data,name:"Piyush",age:22});
    }
  return (
    <>
    
    <h1>My name is {data.name} and My age is {data.age} AND ROLL NO ID {data.roll} </h1>

    <button onClick={handleInput}>Change</button>

    
    </>

  )

}

export default MultipleInputs
