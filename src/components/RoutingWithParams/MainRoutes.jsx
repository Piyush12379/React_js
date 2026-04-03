import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Add from './Add'
const MainRoutes=()=>{
    return(
        <BrowserRouter>
    <AppRoute/>
    </BrowserRouter>
    )
}
const AppRoute = () => {
    const navigate=useNavigate();
  return (
    <>
       
    
  <Routes>
      <Route path="/add/:num" element={<Add/>} />
   </Routes>

     <button onClick={()=>navigate("/add/6")}>Add 6</button>
     <button onClick={()=>navigate("/add/5")}>Add 5</button>
    
    </>
  )
}

export default MainRoutes