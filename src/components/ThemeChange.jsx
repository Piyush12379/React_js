import React,{useState,useEffect} from 'react'

const ThemeChange = () => {
    const [dark,setDark]= useState(false);

    useEffect(()=>{
             document.body.style.backgroundColor=dark?"black":"white";   

    },[dark])
    return (
    <>
      <button onClick={()=>setDark(!dark)}>Change</button>
    
    </>
  )
}

export default ThemeChange